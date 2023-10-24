import React from 'react'
import BannerDivider from '../aaContainer/HomePage/BannerDivider/BannerDivider'
import Girl_saying_Hi from '../../../Animation/Girl_saying_Hi'
import Testimonials from '../aaContainer/Testimonials/Testimonials'
import BMICalculator from '../../../components/BMICalculator/BMICalculator'
import styles from './style.module.scss'
import KitsimgCard from '../../../components/Kits/KitsimgCard'
import TeamMembers from '../aaContainer/TeamMembers/TeamMembers'

const page = () => {
  return (
    <>
    <div className={styles.main}>
      <BannerDivider />

      <div className={styles.main_girl}>  
        <div className={styles.main_girl_right}>
          <h2>Hi !</h2>
          <Girl_saying_Hi />
        </div>
        
        <div className={styles.main_girl_content}>
          <div className={styles.main_girl_content_c1} >
            <h1>Your Ultimate well-beign at Just ₹10 per/Day</h1>
            <p> In today's fast-paced world, SEHATm Nutrition isn't just a wellness platform, it's your gateway
              to an extraordinary life, available at an incredible rate of just ₹10 pre day, Seamlessly blending
              personalized nutrition, cutting-edge technology and unwavering support, we empower you to
              take charge of your well-being and transform it into a fulfilling lifestyle.
            </p>         
          </div>
          {/* <div className={styles.main_girl_content_img}>
            <img src='/img8.jpg'></img>
          </div> */}
        </div>
      </div>
  
    </div>

      <section className={styles.section}>
        <h1 style={{textAlign:'center'}}>How it Works</h1>
        <section1>         
          <div className={styles.box1}>
            <div className={styles.box1_img}>
              <img src='/AdobeStock_588971224_Preview.png'></img>
            </div>
            
            <div className={styles.box1_content}>
              <h1>
              <span1>1</span1>{" "}
              <span2>Preamble</span2>
              </h1>
              <p>Begin by selecting thw wellness plan that aligns with your goals 
                -individuals, Family or Corporate.
              </p>
            </div>
          </div>
        </section1>

        <section2>         
          <div className={styles.box1}>
                     
            <div className={styles.box1_content}>
              <h1>
                <span1>2</span1>{" "}
                <span2>Complete Your Payment:</span2>
              </h1>
              <p>Safely and swiftly make your payment. And don't forget, we offer a 
                1-month, 100% refund policy for your peace of mind.
              </p>
            </div>

            <div className={styles.box1_img}>
              <img src='/payment.png'></img>
            </div>
          </div>
        </section2>

        <section3>         
          <div className={styles.box1}>
            <div className={styles.box1_img}>
              <img src='/call.png'></img>
            </div>
            <div className={styles.box1_content}>
              <h1>
                <span1>3</span1>{" "}
                <span2>Welcome Call :</span2>
              </h1>
              <p>Expect a call from our dedicated dieticican, whon will guide you towards 
                a personalized well-being journey.
              </p>
            </div>
          </div>
        </section3>

        <section4>         
          <div className={styles.box1}>
            <div className={styles.box1_content}>
              <h1>
                <span1>4</span1>{" "}
                <span2>Start Your Wellness Journey :</span2>
              </h1>
              <p>With a plan in place, embark your transformative journey to healthier, happier you,
                supported by our expert guidance and our 1-month, 100% refund policy.
              </p>
            </div>
            <div className={styles.box1_img}>
              <img src='/journey.png'></img>
            </div>
          </div>
        </section4>
      </section>

      <section className={styles.journey}>
        <main >
          <h1>Personalized Nutrition Plan</h1>
          <h1>"Nutrition Tailored Just for You"</h1>
        </main>

        <div className={styles.box1}>
            <div className={styles.box1_content}>
              <h2>Start Your Wellness Journey :</h2>
              <p>With a plan in place, embark your transformative journey to healthier, happier you,
                supported by our expert guidance and our 1-month, 100% refund policy.
              </p>
            </div>
            <div className={styles.box1_img}>
              <img src='/AdobeStock_588971224_Preview.png' height={500} width={500}></img>
            </div>
          </div>
      </section>

      <section className={styles.Testimonials}>
        <h1>We Never Stop Smiling !</h1>
        <p>
          Hi and nice to meet you! This isour brave team. We work very hard to provide an awesome experience for you.
        </p>
        <KitsimgCard
              image="./aboutus_team.png"
              title={`Oliver`}
              role={`Sr. Nutrition`}
            />
        <div style={{display:'flex'}}>
        <TeamMembers></TeamMembers>
        </div>
        
        <Testimonials></Testimonials>
      </section>

      <BMICalculator></BMICalculator>


    </>
  )
}

export default page