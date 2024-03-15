import "./Cards.css"
const Cards = () => {
    return (
        <div className="container-cards">
            <div className="cards">
                <img src="./src/assets/image-retro-pcs.jpg" alt="" />
                <div className="cards-infos">
                    <h1 className="cards-h1">01</h1>
                    <h3 className="cards-h3">Reviving Retro PCs</h3>
                    <p className="cards-p">What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>


            <div className="cards">
                <img src="./src/assets/image-top-laptops.jpg" alt="" />
                <div className="cards-infos">
                    <h1 className="cards-h1">02</h1>
                    <h3 className="cards-h3">Top 10 Laptops of 2022</h3>
                    <p className="cards-p">Our best picks for various needs and budgets.</p>
                </div>
            </div>

            <div className="cards">
                <img src="./src/assets/image-gaming-growth.jpg" alt="" />
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