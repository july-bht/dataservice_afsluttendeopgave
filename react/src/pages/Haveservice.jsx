import React, { useState, useEffect } from 'react';
import { aboutus, services, reviews, galleryitems } from '../helpers/api';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import img1 from "../images/service1.jpg";
import img2 from "../images/service2.jpg";
import sliderImg from "../images/service2.jpg";
import error from '../helpers/error';
import loading from '../helpers/loading';





const Haveservice = () => {


    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    const [about, setAbout] = useState();
    const [service, setService] = useState();
    const [review, setReview] = useState();

    useEffect(() => {

        setLoading(true);

        aboutus()
            .then(data => {
                setAbout(data);
                setError(false);
            }
            )
            .catch(err => {
                console.log(err)
                setError(true);
                setAbout()
            }
            ).finally(() => {
                setLoading(false);
            }
            )

        services()
            .then(data => {
                setService(data);
                setError(false);
            }
            )
            .catch(err => {
                console.log(err)
                setError(true);
                setService()
            }
            ).finally(() => {
                setLoading(false);
            }
            )

        reviews()
            .then(data => {
                setReview(data);
                setError(false);
            }
            )
            .catch(err => {
                console.log(err)
                setError(true);
                setReview()
            }
            ).finally(() => {
                setLoading(false);
            }
            )
    }, []);


    const [slideIndex, setSlideIndex] = useState(1)


    const moveDot = index => {
        setSlideIndex(index)
    }


    return (
        <div className=''>

            {loading && <h2>loading</h2>}
            {error && <h2>error</h2>}

            <section className='py-40 px-32 h-max bg-gray-100 flex  justify-between '>

                {about && <div className='w-1/2 pr-8'>
                    <h2 className='text-4xl font-semibold '>
                        {parse(about.title)}
                    </h2>
                    <hr className='w-12 border border-3 border-lime-600 mt-2' />
                    <div className='text-gray-500 py-8 text-sm '>
                        {parse(about.content)}
                    </div>

                    <Link to="services" className='rounded bg-lime-600 text-white font-light uppercase py-3 px-4'>
                        se alle ydelser</Link>
                </div>}

                <div className='flex g-5 justify-center  w-1/2'>
                    {service && service.slice(0, 2).map((item, index) => {
                        return (


                            <div className='w-1/2 p-5 ' key={index}>
                                <figure >
                                    <img className='w-full h-52 object-cover' src={img1} alt={item.title} />
                                </figure>
                                <figcaption>
                                    <h2 className='text-3xl text-gray-800 font-medium'>
                                        {parse(item.title)}
                                    </h2>
                                    <div className='text-gray-500 py-5 text-sm'>
                                        {parse(item.content)}
                                    </div>
                                </figcaption>
                            </div>

                        )
                    })}
                </div>
            </section >

            {/* <section className=' bg-red-500 flex flex-col'> */}
            <section className="p-36 container-slider bg-lime-600 opacity-80 w-screen h-max relative overflow-hidden text-center text-white">

                <h2 className='text-4xl font-bold '>Kundeudtalelser</h2>
                <hr className='hr' />

                {review && review.map((item, index) => {
                    return (

                        <div
                            key={item.id}
                            className={slideIndex === index + 1 ? "slide active-anim opacity-100" : "w-full  slide absolute opacity-0 "}
                        >
                            <p className='p-12 text-lg'> "{item.content}"</p>
                            <p>- {item.author}</p>
                        </div>

                    )
                })}


                <div className="container-dots w-max pt-10 mx-auto  flex">
                    {Array.from({ length: 3 }).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active w-6 h-6 rounded-full mx-2  bg-white opacity-90" : "mx-2 dot w-6 h-6 rounded-full  bg-white opacity-50"}
                        ></div>
                    ))}
                </div>


            </section>

            {/* {review &&
                    <div className=' z-20 p-5 flex flex-col justify-center text-center text-white'>
                        <h4 className='text-3xl'>Kundeudtalelser</h4>
                        <div className='border-2 w-12  mx-auto my-5'></div>

                        <div className='flex flex-col gap-5'>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ad quam. Perspiciatis atque dicta vitae saepe dolorem harum quisquam obcaecati, accusamus nostrum tempora omnis distinctio doloribus enim optio eum rerum."</p>
                            <p>- lorem ibsum</p>

                        </div>
                        <div className='p-5'>dots</div>
                    </div>
                } */}


            {/* <div className='absolute z-10 overflow-hidden  bg-lime-600 opacity-30 h-96 '>
                    <img className=' object-fit  z-0' src={img1} alt="" />  </div> */}

            {/* </section> */}

            {/* <section className='flex flex-col  bg-lime-600 text-center text-white p-5 h-96'> */}



            {/* <h4 className='text-4xl p-5'>Vores ydelser</h4>
                <div className='hr'></div>
                <p className='w-2/3 mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus, officiis facilis magnam modi perspiciatis? Facere iusto fugit praesentium fuga.</p>
                <div className='flex justify-center'>
                    <figure className='p-5'>
                        <img className='rounded-full border-4 border-lime-500' src="" alt="" />
                        <figcaption className='p-5 flex flex-col gap-5'>
                            <h5>lorem ibsum</h5>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, laborum?</p>
                        </figcaption>
                    </figure>
                </div> */}

            {/* </section> */}
        </div >
    )
}

export default Haveservice;