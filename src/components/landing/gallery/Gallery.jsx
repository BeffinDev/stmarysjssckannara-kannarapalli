import { useEffect, useState } from "react";
import "./Gallery.css";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
// import { deleteGalleryImage, getGalleryImages } from "../../../api/AdminRequest";
// import { getGalleryImages, deleteGalleryImage } from "../../api/UserRequest";


import { MdOutlineDelete, MdOutlineRemoveRedEye } from "react-icons/md";
// import { ExclamationCircleFilled } from "@ant-design/icons";
import { PiSelectionAllThin } from "react-icons/pi";
import { Modal, Spin, Tabs } from "antd";
import { getGalleryImages } from "../../../api/PublicRequest";
import TabPane from "antd/es/tabs/TabPane";

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

    const [activeImageTab, setActiveImageTab] = useState("All");
    const [galleryCategories, setGalleryCategories] = useState([]);
    const [galleryData, setGalleryData] = useState({});



    const defaultCategories = {
        "palli": [
            {
                "_id": {
                    "$oid": "66bd06616754432323b0a069"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/palli/87c686b4-35f2-4b4f-91b8-d69bcb2f53f8",
                "type": "image/webp",
                "name": "804e854ac81110b6d9b5da9500ea28d07b1975f571038de9bdea2c3d7caa4440"
            },
            {
                "_id": {
                    "$oid": "6710af0e26d0c60137c75e36"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/palli/DIL04811.JPG",
                "type": "image/webp",
                "name": "adminGallery/38f79/512c44f172934ccbbb4fc9f90227361005b1a826538f5bb5338447e78dedae53"
            },
            
           
            {
                "_id": {
                    "$oid": "6710af5a26d0c60137c75e58"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/palli/e5df2c8f-bdc6-4ddd-8e0e-d672e2d52e89",
                "type": "image/webp",
                "name": "adminGallery/38f79/659dff7575fceaed8d0dfa3d62b4f9160793c7dac31bda9fec8f90fba78fd7e3"
            },
            {
                "_id": {
                    "$oid": "6710af5a26d0c60137c75e58"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/palli/image00976.jpg",
                "type": "image/webp",
                "name": "adminGallery/38f79/659dff7575fceaed8d0dfa3d62b4f9160793c7dac31bda9fec8f90fba78fd7e3"
            },
        
            {
                "_id": {
                    "$oid": "6710af5a26d0c60137c75e58"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/palli/IMG_20250214_00464778.jpeg",
                "type": "image/webp",
                "name": "adminGallery/38f79/659dff7575fceaed8d0dfa3d62b4f9160793c7dac31bda9fec8f90fba78fd7e3"
            },
            {
                "_id": {
                    "$oid": "6710af5a26d0c60137c75e58"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/palli/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches.jpg",
                "type": "image/webp",
                "name": "adminGallery/38f79/659dff7575fceaed8d0dfa3d62b4f9160793c7dac31bda9fec8f90fba78fd7e3"
            },
            {
                _id: {
                    $oid: "66bf77977358f36fa5575912"
                },
                url: "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/palli/02bfa17a-6406-40e6-9f76-ac35039835b9",
                type: "image/webp",
                name: "adminGallery/38f79/3554209103b0cd5c0c8a6d68c0ad97e78167dffb0110c8919b088fb2509430a4"
            },
           
            {
                "_id": {
                    "$oid": "66ed0da3893d00a908297470"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/palli/c70eb297-092a-483e-8274-f0b07c3eb0a9",
                "type": "image/webp",
                "name": "adminGallery/38f79/06c96d85d461d39c935ee50f219d2f27530432d477f084e66dc121cd96e385d9"
            },
        ],
        "madbaha": [
            {
                "_id": {
                    "$oid": "66c6eef3699e96e6fcfef20d"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/0dfa2391-dff5-4d5f-ba25-6e8f41a174d0",
                "type": "image/webp",
                "name": "adminGallery/38f79/381e0e96d3e69198444c4df34df523961e2016340f5c404fbaba05554ade0a82"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/40555a6d-5640-4102-b95b-fac3a75ea5b5",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/f7eabd04-fda9-4e45-a037-9ec6f30660a3",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/afb0d876-8d15-42d6-8ca2-8f9a36fa9e4f",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/9a0881d7-7f94-43e2-b786-8825b2de0b0b",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            {
                "_id": {
                    "$oid": "66cd58de668506e54de5d6c7"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/1b592518-20e8-4594-be8c-b521a41d20c0",
                "type": "image/webp",
                "name": "adminGallery/38f79/3efee466339ef77936decb7c9e7336fa77733c2b90bcfe6aabf28259d3f7cbe0"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/2e74bea2-4105-488f-a4bf-ee23c831a997",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
           
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/6517ea2a-1c0f-4ab3-befd-8db82116eaba",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/79265d82-6969-4c5d-81fd-a8bf9c1d40f4",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/99400c09-0856-4c6e-ac42-97df6c259842",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
           
            
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/b1f974f6-ca81-4cd6-8b05-fc8c5351fd0a",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/c10b0fdd-5e39-4d8d-8803-8b78639eac7f",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/f0ec0cf2-fa4a-4c6c-b753-01382970c158",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/f4458695-ecce-41d9-931b-aab084e097ee",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
            
            {
                "_id": {
                    "$oid": "671e8047552f0dd63b589f47"
                },
                "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/images/madbaha/fb7e4897-0e00-401a-87b0-9bb4d0fee19f",
                "type": "image/webp",
                "name": "adminGallery/38f79/a337bb715f785e4dcc7220e98fcba5b2a315256941479c8134f273bdc288c62d"
            },
        ],
        // "profile image": [
        //     {
        //         "_id": {
        //             "$oid": "66cc37d3699e96e6fcff019b"
        //         },
        //         "url": "https://metatestbucket.s3.ap-south-1.amazonaws.com/adminGallery/38f79/5219904173e6a0a845e5b862bc173f480850c2bd152347f4cccc711514ef9710",
        //         "type": "image/webp",
        //         "name": "adminGallery/38f79/5219904173e6a0a845e5b862bc173f480850c2bd152347f4cccc711514ef9710"
        //     }
        // ],
        // "asdasdfsadsdf": [],
        // "sooraj videos": [
        //     {
        //         "_id": {
        //             "$oid": "66cc37d3699e96e6fcff019b"
        //         },
        //         "url": "https://kannarapalli.s3.ap-southeast-2.amazonaws.com/videos/5_6170365590432124492.mp4",
        //         "type": "video/mp4",
        //         "name": "adminGallery/38f79/5219904173e6a0a845e5b862bc173f480850c2bd152347f4cccc711514ef9710"
        //     }
        // ]
    }



    useEffect(() => {
        const fetchImageData = async () => {

            // setLoaded(true);
            // const { data } = await getGalleryImages()
            // console.log(data);
            // if (data.success) {
            //     setLoaded(false);
            //     setImages(data.galleryImage);
            // }
            // setImages(defaultImages);

            // const response = await getZeeqrFolder();
            // const categories = response.data.categories || {};
            const categories = defaultCategories || {};

            // Extract and set category names
            const categoryNames = Object.keys(categories).map((category) =>
                category.toUpperCase()
            );

            // Set the gallery data and categories
            setGalleryData(categories);
            // console.log("Gallery Data:", categories);
            setGalleryCategories(categoryNames);

            // Set the first category as the active tab
            // if (categoryNames.length > 0) {
            //     setActiveImageTab(categoryNames[0]);
            // }
        };

        fetchImageData();
    }, [change, changeMade]);

    const getImg = (img) => {
        setTempImg({ id: img?.id, url: img?.url,type:img?.type });
        setModal(true);
    };


    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex - 1;
            if (newIndex >= 0) {
                const newImage = galleryData[activeImageTab.toLowerCase()][newIndex];
                setTempImg({ url: newImage.url, id: newImage._id });
            }
            return newIndex;
        });
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => {
            const newIndex = prevIndex + 1;
            if (newIndex < galleryData[activeImageTab.toLowerCase()].length) {
                const newImage = galleryData[activeImageTab.toLowerCase()][newIndex];
                setTempImg({ url: newImage.url, id: newImage._id });
            }
            return newIndex;
        });
    };








    const handleImageTabChange = (key) => {
        // console.log(key, "keyyyyy");
        setActiveImageTab(key);
        // setShowCheckboxes(false);
        // setSelectedImageIds([]);
    };



    const renderImages = (images) => {

        return (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full ">
                {images.map((image, index) => (
                    <div
                        key={image._id}
                        className="relative w-full group flex bg-slate-100"
                    >
                        {image?.type?.startsWith("video") ?
                            <video className="w-full h-full object-contain"
                                autoPlay

                                src={image?.url}
                            />
                            :
                            <img
                                src={image.url}
                                alt={image.name || "image"}
                                className="w-full h-auto object-contain"
                            />
                        }
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MdOutlineRemoveRedEye
                                className="text-white text-2xl mx-2 cursor-pointer"
                                // onClick={() => handlePreview(images, index)}
                                onClick={() => getImg(image)}
                            />
                            {/* <MdOutlineDelete
                                className="text-white text-2xl mx-2 cursor-pointer"
                                onClick={() => showDeleteConfirm(image)}
                            /> */}
                        </div>
                    </div>
                ))}
            </div>
        );
    };



    return (
        <div className="min-h-[400px] bg-gray-100 py-8 px-16" >


            <>
                <div className="flex   justify-between items-center mb-4 ">
                    <Tabs
                        activeKey={activeImageTab}
                        onChange={handleImageTabChange}
                        className="w-full md:w-auto shadow-none custom-card-customizer-tabs-folder custom-tabs-folder"
                        tabBarStyle={{ borderBottom: "none" }}
                    >
                        <TabPane
                            tab={
                                <span className="text-[10px] md:text-[12px]">All</span>
                            }
                            key="All"
                        />
                        {galleryCategories.length > 0 ? (
                            galleryCategories.map((category) => (
                                <TabPane
                                    tab={
                                        <span className="text-[10px] md:text-[12px]">
                                            {category}
                                        </span>
                                    }
                                    key={category}
                                />
                            ))
                        ) : (
                            <TabPane
                                tab={
                                    <span className="text-[10px] md:text-[12px]">
                                        CATEGORY
                                    </span>
                                }
                                key="CATEGORY"
                            />
                        )}
                    </Tabs>

                </div>

                {activeImageTab &&
                    (activeImageTab === "All" ? (
                        Object.values(galleryData).flat().length > 0 ? (
                            renderImages(Object.values(galleryData).flat())
                        ) : (
                            <div className="text-center text-gray-500">
                                No images available.
                            </div>
                        )
                    ) : galleryData[activeImageTab.toLowerCase()] &&
                        galleryData[activeImageTab.toLowerCase()].length > 0 ? (
                        renderImages(galleryData[activeImageTab.toLowerCase()])
                    ) : (
                        <div className="text-center text-gray-500">
                            No images available.
                        </div>
                    ))}
            </>








            <Spin spinning={loaded} >
                <div className={`${modal ? "modal open" : "modal"} z-50`}>
                    <button
                        onClick={handlePrevClick}
                        className="previous-button text-white"
                        type="button"
                    >
                        <FaCircleChevronLeft size={28} />
                    </button>
                    {tempImg?.type?.startsWith("video") ?
                        <video className="w-full h-full object-contain"

                            controls
                            src={tempImg?.url}
                        />
                        :
                        <img src={tempImg.url} alt="image" />
                    }
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

                {/* <div
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
                                       
                                    </div>
                                }
                            </div>
                        );
                    })}
                </div> */}

            </Spin>
        </div>
    );
}

export default Gallery;