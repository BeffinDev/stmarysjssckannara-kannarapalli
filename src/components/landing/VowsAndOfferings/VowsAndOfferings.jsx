import React from 'react'

function VowsAndOfferings() {

    const offerings = [
        { title: "Holy Qurbana", description: "Mono Mass, Tri Mass, Penta Mass, Memorial Mass" },
        { title: "Intercessory prayer to St. Mary", description: "Madhyastha Prarthana" },
        { title: "Offering of infants to God", description: "Adima" },
        { title: "Offering handful of money", description: "Pidippanam" },
        { title: "Rolling around the stone cross", description: "Urul Nercha" },
        { title: "Offering of Ornamental Umbrella & flag", description: "" },
        { title: "Offering of Gold and Silver cross", description: "" },
        { title: "Offering of Coconut oil, candle & frankincense", description: "" },
        { title: "Lighting row of lights around the stone cross", description: "Chuttuvilakku" },
        { title: "Pachor Nercha", description: "" },
        { title: "Blessing of coir and bucket", description: "" },
    ];

    const majorOffering = "Dedicating of children to the church is a main offering at the church. Those who have been dedicated to the Church come to the Church every year with their offerings. Arrange for Holy Mass Holy Mass Mass in memory of the dead Prayer seeking intercession Holy Tri-Mass (Munninmel Kurbana) Holy Penta-Mass (Anchinmel Kurbana)"
    const timing = " Kurubana Timings Monday to Thursday : 7.00 am to 8.00 am Friday and Saturday:  7.30 am to 8.30 am Sunday: 09.00 am to 10.30 am"
    return (
        <div>
            <div className="bg-gray-100 py-8 px-4">
                <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold  text-center mb-4">Major Offerings & Vows</h2>
                        <p className='text-black mb-2'>{majorOffering}</p>
                        <p className='text-black'>{timing}</p>

                        <ul className="mt-4 space-y-2">
                            {offerings.map((offering, index) => (
                                <li key={index} className="p-2 bg-gray-200 rounded-lg text-black">
                                    <strong >{offering.title}</strong> {offering.description && `(${offering.description})`}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VowsAndOfferings