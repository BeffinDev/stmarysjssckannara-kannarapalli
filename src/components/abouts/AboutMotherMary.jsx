import React from 'react'

import mothermary from "../../assets/mothermary/motherMary.jpg"
import mothermary1 from "../../assets/mothermary/mothermary01.jpg"


function AboutMotherMary() {

    const content = [
        {
            title: "Mother Mary - Defender of Orthodoxy",
            image: mothermary,
            text: `The story of the Mother Mary is a remarkable one itself, one that echoes many Old Testament stories. Joachim and Anna were a God fearing couple. Joachim, a wealthy man, gave more than the required ten percent to the Temple. However, the Lord had not blessed them with a child. Many in the community mocked the couple, as in ancient Israelite times infertility was seen as a curse from God. Joachim was so distraught by this barrenness that he went into the desert and fasted for forty days and forty nights. Anna stayed home praying and lamenting over her barren womb as well. Eventually, an angel of the Lord appeared to them both saying they would conceive a child, and Anna promised to dedicate the child to the Temple. Mary was born and dedicated to the Temple at the age of three. At the age of the twelve, she was betrothed to the widower Joseph.[1] It is at this point the story becomes familiar to all. It is during this time of engagement that the angel Gabriel comes to Mary and tells her that she will give birth to the Savior (Luke 1:26-38). During Christ’s ministry, Mary would occasionally accompany him and would be one of the few that would be at the foot of the Cross when Christ was crucified. After Pentecost, Holy Tradition teaches Mary traveling spreading the Gospel of her Son. When the Virgin was on her deathbed, all the apostles, except St. Thomas, were at her side. Thomas, who was teaching the Gospel in India, was taken up on a cloud to see Mary, but he saw her being lifted into the clouds as he arrived. The Virgin Mary gave him her girdle as proof and a memento to remember her by. When the apostles came back to the tomb of the Mother, they found it empty and Thomas showed them the girdle of Christ’s mother as proof that she had been assumed body and soul into the heavens.`,
        },
        {
            // title: "The Story of Mother Mary",
            // image: mothermary1,
            text: "It is the life of the Theotokos that makes her significant in the Holy Church. Paul refers to Christ as the New Adam for undoing the curse of sin through His obedience to the Father, “even obedience unto a cross” (Romans 5:19, Philippians 2:8). In the same way the Church calls Mary “the New Eve” because through her obedience to the Father’s will, she brought forth the Savior of the world and undid Eve’s disobedience. Growing up in the Church, it is easy for us to trivialize what that means. Bearing God in one’s womb is no simple accomplishment. In the Old Testament, Moses was not allowed to see the face of God for it would kill him. He was only allowed to see the back of God as He walked away from him (Exodus 33:18-23). Mary, on the other hand, through her obedience, was allowed to carry God in her womb, and was not consumed by it. In the Hebrew Scriptures, the Ark of the Covenant was where God resided, and only Levites were allowed to touch it when transporting it. Uzzah was struck dead by God for touching the Ark in II Samuel 6:1-7. Mary became the Ark of the Covenant for she bore God and was not harmed by it. The Church says about this miracle, “she [Mary] who carried within her He Whom the universe cannot contain.” This is the reverence we should approach the miracle of the Incarnation. Mary carried, nursed, bathed, played with, comforted, and loved the Creator of the Universe. Mary was the first person to accept the Savior into her heart, and loved Him with all her heart, soul, strength, and mind (Luke 10:27). For this, the Church loves Mary and venerates her.",
        },
        {
            // title: "The Theotokos",
            // image: "https://lh3.googleusercontent.com/p/AF1QipOaYysRBfGs4DvFeYfb22_hpXIWga6oFgCL5Mij=s680-w680-h510",
            text: "The greatest sign of the Mary’s love for her Son is her faithfulness to Him at the Cross. The Gospel tells the reader that very few people were with the Lord during His suffering, and John was the only apostle that did not run away. The encounter before Christ’s death with His Mother is one that is to not be ignored. “When Jesus saw his mother, and the disciple whom he loved standing near, he said to his mother, ‘Woman, behold, your son!’ Then he said to the disciple, ‘Behold, your mother!’ And from that hour the disciple took her to his own home” (John 19:26-27). The lesson the Holy Church wants us to understand is elucidated in Fr. John Behr’s The Mystery of Christ. Behr explains that John was the only disciple who was at the Cross with Christ, and the Lord entrusted His Mother to John for that reason. In the same way, we are now at the foot of the Cross of our Savior and beg him for mercy. Those who stand at the Cross with the Lord are, then, entrusted with His Holy Mother and He instructs us to love her just He loved her. Many modern Christian groups use Matthew 12:46-50 as a proof text against the veneration of the Theotokos. How silly for one claim that the Mother of God did not do the will of the Father! Only a woman who has done the will of the Father could even be chosen to give birth to the Son, let alone stay faithful and not desert Jesus at the Cross. Christ’s entrusting of His Mother to John, and therefore, the Holy Church is example of His great love for His Mother.",
        },
        {
            // title: "The Theotokos",
            image: mothermary1,
            text: "Therefore, the next time somebody challenges us for venerating the Holy Theotokos, defend the Holy Church and its love of the Virgin Mary. Ultimately, we love the Mother of God because Christ loved His Mother. It is important that we do not forget the humanity of the Savior when speaking of Him. While there is no doubt that the Holy Spirit filled Jesus and guided Him toward the Cross, it was also His Mother who helped Him achieve that goal. Mary knew her Son was destined for something great as the Archangel Gabriel told her. Furthermore, the prophet Simeon foretold of Jesus’ greatness and the sadness Mary would have to endure, “Behold, this child is set for the fall and rising of many in Israel, and for a sign that is spoken against (and a sword will pierce through your own soul also), that thoughts out of many hearts may be revealed” (Luke 2:34-35). It is not unreasonable to believe that Jesus would have first heard the Scriptures from His Mother, and the Lord would use those Scriptures to teach the multitudes when He was older. Most importantly, Christ’s first encounter with sacrificial love would have been His Mother. His Mother would have been the first person to teach Him to love all unconditionally, and it is that love that would guide the Savior to the Cross.",
        },
        {
            // title: "The Theotokos",
            // image: "https://lh3.googleusercontent.com/p/AF1QipOaYysRBfGs4DvFeYfb22_hpXIWga6oFgCL5Mij=s680-w680-h510",
            text: "This is why the Church makes such a big deal about Mary. Mary points the Holy Church to Jesus Christ. In every icon of the Theotokos, we see Mary’s hand pointing toward Christ, so that we may love Christ more. Mary was the first person to love Christ more than herself, and to trust His plan as greater than hers. The Theotokos is the model for all Christians, because if we learn to love her Son the way she did, even to the point of death, then we have accomplished the greatest commandment (Matthew 22:36-37).",
        },
    ];
    return (
        <div>
            <div className="container mx-auto py-8 space-y-8">
                {content.map((item, index) => (
                    // <div
                    //     key={index}
                    //     className={`flex flex-col lg:flex-row  ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                    //         }`}
                    // >
                    //     <div className="lg:w-1/3 w-full">
                    //         <img
                    //             src={item.image}
                    //             alt={item.title}
                    //             className="w-full h-auto rounded-lg shadow-md object-cover"
                    //         />
                    //     </div>



                    //     {/* Text */}
                    //     <div className="lg:w-2/3 w-full lg:px-8 mt-4 lg:mt-0">
                    //         <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                    //         <p className="text-gray-700">{item.text}</p>
                    //     </div>



                    // </div>
                    <div className='mt-4' >

                        <span  >
                            {item?.image &&
                                <img
                                    src={item?.image}
                                    alt={item?.title}
                                    className="w-1/3  rounded-lg shadow-md object-cover object-top m-4"
                                    style={{ float: index % 2 !== 0 ? "right" : "left" }}
                                />
                            }
                            {/* <div className='min-h-80'> */}
                            <div>

                                <h2 className="text-2xl font-bold mb-2">{item?.title}</h2>
                                <p className="text-gray-700">{item?.text}</p>
                            </div>
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AboutMotherMary