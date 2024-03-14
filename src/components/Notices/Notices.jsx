import './Notices.css'
const Notices = () => {
    return (
        <div className="container">
            <div>
                <img src="./src/assets/image-web-3-desktop.jpg" alt="" />
                <div className='article'>
                    <h1 className='article-h1'>The Bright future of Web 3.0 ?</h1>
                    <div className='infos'>
                        <p>We dive into the next evolutuion of the web that clains
                            to put the power of the  platforms back into the hands of the people. But is it really fulfilling its promise?
                        </p>

                        <button type="button">READ MORE</button>
                    </div>
                </div>
            </div>

            <div className='article-list'>
                <div>
                    <h1 className='article-list-h1'>New</h1>
                    <h2 className='article-list-h2'>Hydrogen VS Eletric Cars</h2>
                    <p className='article-list-p'> Will hydrogen-fueld cars ever catch up to Evs</p>
                </div>

                <div>
                    <h2 className='article-list-h2'>The Downsides of Al Artistry</h2>
                    <p className='article-list-p'>What are the possible adverse effects of on-demand Al image generation ?</p>
                </div>

                <div>
                    <h2 className='article-list-h2'>Is VC Funding Drying Up ? </h2>
                    <p className='article-list-p'>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                </div>
            </div>
        </div>
    );
}

export default Notices;