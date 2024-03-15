import "./Cards.css"
const Cards = () => {
    return (
        <div className="container-cards">
            <div className="cards">
                <img src="https://utfs.io/f/7bcb1d7c-d473-438e-947f-f6a64a1f4162-45arwh.jpg" alt="" />
                <div className="cards-infos">
                    <h1 className="cards-h1">01</h1>
                    <h3 className="cards-h3">Reviving Retro PCs</h3>
                    <p className="cards-p">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>


            <div className="cards">
                <img src="https://utfs.io/f/0863fe46-b169-43b0-ad1d-cedc103de8a8-ky1gv.jpg" alt="" />
                <div className="cards-infos">
                    <h1 className="cards-h1">02</h1>
                    <h3 className="cards-h3">Top 10 Laptops of 2022</h3>
                    <p className="cards-p">Our best picks for various needs and budgets.</p>
                </div>
            </div>

            <div className="cards">
                <img src="https://utfs.io/f/d2886e6a-323c-4dd4-ad91-c911f76a0cc3-yq5hvx.jpg" alt="" />
                <div className="cards-infos">
                    <h1 className="cards-h1">03</h1>
                    <h3 className="cards-h3">The Growth of Gaming</h3>
                    <p className="cards-p">How the pandemic has sparked fresh opportunities</p>
                </div>
            </div>
        </div>

    );
}

export default Cards;