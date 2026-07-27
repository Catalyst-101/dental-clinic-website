import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchDoctors } from '../api/doctorsApi';
import { DoctorCard } from '../components/DoctorCard';
import { Button } from '../components/Button';


const Doctors = () => {
  const navigate = useNavigate();

  const [doctorsList, setDoctorsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    let isMounted = true;
    const loadDoctors = async () => {
      try {
        setLoading(true);
        const data = await fetchDoctors({ all: "true" });
        if (isMounted) setDoctorsList(data || []);
      } catch (err) {
        console.error("Failed to load doctors:", err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    loadDoctors();
    return () => { isMounted = false; };
  }, []);


  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };


  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };


  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };


  const filteredDoctors = doctorsList.filter(doctor => {
    const name = doctor.name || '';
    const specialization = doctor.specialization || '';
    const qualifications = doctor.qualifications || '';
    const category = doctor.category || '';

    const matchesSearch =
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      qualifications.toLowerCase().includes(searchQuery.toLowerCase());


    if (activeCategory === "All") return matchesSearch;

    const categoryMapping = {
      "General Dentistry": ["General", "Pediatric", "Endodontic", "Dentist", "Hygienist"],
      "Orthodontics": ["Orthodontics", "Orthodontist"],
      "Cosmetic Surgery": ["Cosmetic", "Implant", "Surgeon"]
    };

    const keywords = categoryMapping[activeCategory] || [activeCategory];

    const matchesCategory =
      category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      keywords.some(keyword =>
        specialization.toLowerCase().includes(keyword.toLowerCase())
      );

    return matchesSearch && matchesCategory;
  });



  return (

    <div className="overflow-hidden bg-background">


      {/* HERO */}

      <section className="relative py-xl overflow-hidden">


        <motion.div

          variants={staggerContainer}
          initial="hidden"
          animate="visible"

          className="
          max-w-7xl mx-auto 
          px-margin-mobile 
          md:px-margin-desktop
          text-center
          "

        >


          <motion.span

            variants={fadeUp}

            className="
            bg-[#DCFCE7]
            text-primary
            px-4 py-1.5
            rounded-full
            text-label-sm
            inline-block
            mb-4
            uppercase
            tracking-wider
            "

          >

            Our Specialists

          </motion.span>



          <motion.h1

            variants={fadeUp}

            className="
            text-display-lg
            font-display-lg
            text-on-surface
            mb-gutter
            "

          >

            Meet Our Elite Medical Team

          </motion.h1>




          <motion.p

            variants={fadeUp}

            className="
            text-body-lg
            text-on-surface-variant
            max-w-2xl
            mx-auto
            leading-relaxed
            "

          >

            Discover our world-class practitioners dedicated to your oral health and aesthetic excellence through personalized dental care.

          </motion.p>


        </motion.div>


      </section>






      {/* CONTENT */}


      <main

        className="
        max-w-7xl
        mx-auto
        px-margin-mobile
        md:px-margin-desktop
        pb-xl
        "

      >



        {/* FILTER */}


        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.6
          }}


          className="
          glass-card
          rounded-xl
          p-6
          mb-lg
          flex
          flex-col
          md:flex-row
          gap-gutter
          items-center
          justify-between
          border
          border-[#DCFCE7]
          "

        >



          <div className="relative w-full md:w-96">


            <span

              className="
              material-symbols-outlined
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-outline
              "

            >

              search

            </span>



            <input

              type="text"

              placeholder="Search by name or specialization..."

              value={searchQuery}

              onChange={(e)=>setSearchQuery(e.target.value)}

              className="
              w-full
              pl-12
              pr-4
              py-3
              bg-surface-container-lowest
              border
              border-outline-variant
              rounded-lg
              focus:ring-2
              focus:ring-primary
              outline-none
              transition-all
              "

            />

          </div>





          <div className="
          flex
          gap-3
          w-full
          md:w-auto
          overflow-x-auto
          ">


          {
            [
              'All',
              'General Dentistry',
              'Orthodontics',
              'Cosmetic Surgery'
            ]
            .map(cat=>(


              <motion.button

                whileHover={{
                  scale:1.05
                }}

                whileTap={{
                  scale:.95
                }}

                key={cat}

                onClick={()=>setActiveCategory(cat)}


                className={`
                
                px-4
                py-2
                rounded-full
                whitespace-nowrap
                transition

                ${
                activeCategory===cat

                ?

                "bg-primary text-white font-bold"

                :

                "bg-surface-container-high text-on-surface-variant"

                }

                `}

              >

                {cat==="All" ? "All Specialists":cat}


              </motion.button>


            ))

          }


          </div>


        </motion.div>







        {/* CARDS */}


        {
        filteredDoctors.length > 0 ?

        (

        <motion.div

          layout

          variants={staggerContainer}

          initial="hidden"

          animate="visible"


          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-gutter
          "

        >


        <AnimatePresence mode="popLayout">


        {
          filteredDoctors.map(doctor=>(


            <motion.div

              key={doctor.id}

              layout

              variants={cardAnimation}


              initial="hidden"

              animate="visible"

              exit={{
                opacity:0,
                scale:.8
              }}


            >

              <DoctorCard doctor={doctor}/>


            </motion.div>


          ))

        }


        </AnimatePresence>


        </motion.div>


        )



        :

        (

        <motion.div

          initial={{
            opacity:0,
            scale:.8
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          className="
          py-20
          text-center
          "

        >


        <span className="
        material-symbols-outlined
        text-[48px]
        text-on-surface-variant
        ">

        search_off

        </span>


        <h3 className="
        text-headline-sm
        font-bold
        mt-4
        ">

        No Specialists Found

        </h3>


        <p className="
        text-body-md
        text-on-surface-variant
        ">

        Try refining your search terms or filters.

        </p>


        </motion.div>

        )

        }



      </main>






      {/* CTA */}



      <motion.section

        initial={{
          opacity:0,
          y:50
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.8
        }}


        className="
        max-w-7xl
        mx-auto
        px-margin-mobile
        md:px-margin-desktop
        mb-xl
        "

      >


      <div className="
      relative
      overflow-hidden
      rounded-2xl
      primary-gradient
      text-white
      p-8
      md:p-xl
      text-center
      shadow-xl
      ">



      <motion.div

        animate={{
          y:[0,-10,0]
        }}

        transition={{
          duration:5,
          repeat:Infinity
        }}

        className="
        relative
        z-10
        space-y-6
        "

      >


      <h2 className="
      text-headline-md
      font-bold
      max-w-xl
      mx-auto
      ">

      Can't decide which specialist is right for you?

      </h2>


      <p className="
      text-body-lg
      max-w-xl
      mx-auto
      opacity-90
      ">

      Book a general consultation and our head doctor will recommend the best specialist for your unique dental needs.

      </p>



      <div className="
      flex
      flex-col
      sm:flex-row
      gap-4
      justify-center
      ">


      <motion.div whileHover={{scale:1.05}}>


      <Button

      onClick={()=>navigate('/book-appointment')}

      className="
      bg-white
      text-primary
      px-8
      py-3
      rounded-full
      font-bold
      "

      >

      Schedule Consultation

      </Button>


      </motion.div>





      <motion.div whileHover={{scale:1.05}}>


      <Button

      onClick={()=>window.open('tel:+15550001234')}

      className="
      bg-primary-container
      text-white
      px-8
      py-3
      rounded-full
      font-bold
      "

      >

      Call Clinic Now

      </Button>


      </motion.div>



      </div>


      </motion.div>



      </div>


      </motion.section>



    </div>

  );

};


export default Doctors;
export { Doctors };