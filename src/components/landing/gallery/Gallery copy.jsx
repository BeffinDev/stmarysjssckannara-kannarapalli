import { useEffect, useState } from "react";
import "./Gallery.css";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
// import { deleteGalleryImage, getGalleryImages } from "../../../api/AdminRequest";
// import { getGalleryImages, deleteGalleryImage } from "../../api/UserRequest";


import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
// import { ExclamationCircleFilled } from "@ant-design/icons";
import { PiSelectionAllThin } from "react-icons/pi";
import { Modal, Spin } from "antd";
import { getGalleryImages } from "../../../api/PublicRequest";

const { confirm } = Modal;

function Gallery({ change, uploadPage, onDataFromChild }) {
    const [images, setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modal, setModal] = useState(false);
    const [changeMade, setChangeMade] = useState()
    const [tempImg, setTempImg] = useState({
        url: "",
        id: ""
    });
    const [loaded, setLoaded] = useState(false);

    const defaultImages = [
        {
            id: 1,
            url: "https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-1hglq9faki.jpg",
            author: "John Doe",
        },
        {
            id: 2,
            url: "https://lh3.googleusercontent.com/p/AF1QipPNnZVv2vlYrd3yDNeZygqkvaWUkg3fzGjQ9Dup=s680-w680-h510",
            author: "Jane Smith",
        },
        {
            id: 3,
            url: "https://lh3.googleusercontent.com/p/AF1QipNi723703iN2YDLJIfLROU98c5N1_qtfmYXodW8=s680-w680-h510",
            author: "David Brown",
        },
        {
            id: 4,
            url: "https://lh3.googleusercontent.com/p/AF1QipP2RLs8WLkwebmP1E83oI1GWgz783V3ZFQZ0ndF=s680-w680-h510",
            author: "Sarah Johnson",
        },
        {
            id: 5,
            url: "https://lh3.googleusercontent.com/p/AF1QipNbXVyvh_aeuzNkQzTeaG17ASLimYNHFGD3NP0D=s680-w680-h510",
            author: "Michael Lee",
        },
    ];

    useEffect(() => {
        const fetchImageData = async () => {

            setLoaded(true);
            const { data } = await getGalleryImages()
            console.log(data);
            if (data.success) {
                setLoaded(false);
                setImages(data.galleryImage);
            }
            setImages(defaultImages);
        };

        fetchImageData();
    }, [change, changeMade]);

    const getImg = (img) => {
        setTempImg({ id: img?.id, url: img?.url });
        setModal(true);
    };


    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            if (newIndex >= 0) {
                const newImage = images[newIndex];
                setTempImg({ url: newImage.url, id: newImage.id });
            }
            return newIndex;
        });
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            if (newIndex < images.length) {
                const newImage = images[newIndex];
                setTempImg({ url: newImage.url, id: newImage.id });
            }
            return newIndex;
        });
    };

    const handleDelete = async (img) => {
        try {
            setLoaded(true)
            const { data } = await deleteGalleryImage(img.id);

            if (data.delete) {

                setChangeMade(Date.now())

                setLoaded(false)
            }
        } catch (error) {
            console.log(error);
        }
    };

    const showDeleteConfirm = (img) => {
        confirm({
            title: "Are you sure delete this Image?",
            icon: <ExclamationCircleFilled />,

            content: 'if you delete the Image, the Image cannnot use any more,also if you had use this image for any purpose that also be deleted.',
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                handleDelete(img);
            },
            onCancel() {
                console.log("Cancel");
            },
        });
    };


    const handleUploadImage = (img) => {

        onDataFromChild(img);
    }



    return (
        <div className="min-h-[400px] bg-gray-100 py-8 px-4" >

            <Spin spinning={loaded} >
                <div className={`${modal ? "modal open" : "modal"} z-50`}>
                    <button
                        onClick={handlePrevClick}
                        className="previous-button text-white"
                        type="button"
                    >
                        <FaCircleChevronLeft size={28} />
                    </button>
                    <img src={tempImg.url} alt="image" />
                    <button
                        className="close-button text-white"
                        type="button"
                        onClick={() => setModal(false)}
                    >
                        <RxCross1 size={28} />
                    </button>
                    <button onClick={handleNextClick} className="next-button text-white" type="button">
                        <FaCircleChevronRight size={28} />
                    </button>
                </div>
                {/* {!loaded ? (
                    <div>...loading</div>
                ) : ( */}
                <div
                    className="gallery columns-3"
                >
                    {images.map((image) => {
                        return (
                            <div
                                // className="pics"
                                className="image-item"
                                key={image.id}
                            // onClick={() => getImg(image)}
                            >
                                <img
                                    loading="lazy"
                                    style={{ width: "100%" }}
                                    src={image.url}
                                    alt={image.author}
                                    className={`${uploadPage ? 'cursor-pointer' : ''}`}
                                />
                                {uploadPage ?
                                    <div className="image-overlay">
                                        <span className="icon" onClick={() => handleUploadImage(image)}>
                                            <PiSelectionAllThin />
                                        </span>
                                    </div>
                                    :

                                    <div className="image-overlay">
                                        <span className="icon" onClick={() => getImg(image)}>
                                            <MdOutlineRemoveRedEye />
                                        </span>
                                        {/* <span className="icon" onClick={() => showDeleteConfirm(image)}>
                                            <MdOutlineDelete />
                                        </span> */}
                                    </div>
                                }
                            </div>
                        );
                    })}
                </div>
                {/* )} */}
            </Spin>
        </div>
    );
}

export default Gallery;