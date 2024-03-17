
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[500px] rounded-3xl" style={{backgroundImage: 'url(https://i.ibb.co/nRtZ0QQ/johnathan-macedo-4-NQEvx-W2-4w-unsplash.jpg)'}}>
            <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl lg:max-w-3xl">
                <h1 className="mb-5 text-4xl lg:text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className="mb-5">Discover mouthwatering recipes tailored to your taste buds on our intuitive cooking website. From appetizers to desserts, culinary inspiration awaits!</p>
                <div className="flex gap-5 justify-center">
                    <button className="btn bg-[#0BE58A] border-0 text-black rounded-full font-bold">Explore Now</button>
                    <button className="btn btn-outline text-white rounded-full font-bold">Our Feedback</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;