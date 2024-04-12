import './FAQ.css'
import Register from './Register';
function FAQ(){
    return(
        <section className="faq ">
            <div className="container mb-5">
            <h1 className="main-heading text-white pt-5 pb-3" align="center ">Frequently Asked Questions</h1>

                <div className="accordion " id="FAQAcc">

                    <div className="accordion-item">
                            <div className="accordion-header ">
                                <button className="accordion-button fw-medium" data-bs-toggle="collapse"  data-bs-target="#ans1" >What is Netflix</button>
                            </div>
                        <div className="accordion-collapse collapse " data-bs-parent="FAQAcc" id="ans1">
                            <div className="accordion-body">
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                                    </p>
                                    <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <div className="accordion-header">
                            <button className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#ans2"
                            >How much does Netflix cost?</button>
                        </div>
                        <div className="accordion-collapse collapse" id="ans2" data-bs-parent="#FAQAcc">
                            <div className="accordion-body">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹649 to ₹149 a month. No extra costs, no contracts.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className="accordion-header">
                            <button className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#ans3"
                            >Where can I watch?</button>
                        </div>
                        <div className="accordion-collapse collapse" id="ans3" data-bs-parent="#FAQAcc">
                            <div className="accordion-body">
                                <p>
                                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                                </p>
                                <p>
                                    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                                </p>
                            
                            </div>
                        </div>

                    </div>
                        <div className="accordion-item">
                        <div className="accordion-header">
                            <button className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#ans4"
                            >How do I cancel?</button>
                        </div>
                        <div className="accordion-collapse collapse" id="ans4" data-bs-parent="#FAQAcc">
                            <div className="accordion-body">
                                Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <div className="accordion-header">
                            <button className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#ans5"
                            >What can I watch on Netflix?</button>
                        </div>
                        <div className="accordion-collapse collapse" id="ans5" data-bs-parent="#FAQAcc">
                            <div className="accordion-body">
                                <p>
                                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime. 
                                </p>
                            
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item">
                        <div className="accordion-header">
                            <button className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#ans6"
                            >Is Netflix good for kids?</button>
                        </div>
                        <div className="accordion-collapse collapse" id="ans6" data-bs-parent="#FAQAcc">
                            <div className="accordion-body">
                                <p>
                                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                                </p>
                                <p>
                                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                                </p>
                            
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>

            <Register/>
            <div className="separatorLine mt-5"></div>
            
        </section>
        
    )
}
export default FAQ;