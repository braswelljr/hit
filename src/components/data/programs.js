import program1 from "../../assets/images/coding.png";
import program2 from "../../assets/images/card2.png";
import program3 from "../../assets/images/iot-carbot.png";
import program4 from "../../assets/images/card3.png";
import instructor1 from "../../assets/images/instructor1.png";

const programs = [
  {
    topic: `ICT & Programming`,
    body: `Let's demystify the world of computer science`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error laborum dolorem beatae rem, minus unde fugiat, impedit inventore cupiditate architecto hic accusamus natus quidem debitis? Unde, sed maiores? Corporis a laborum, architecto tempora eos, modi eius nesciunt fugiat fugit ducimus est impedit? Inventore soluta architecto, aperiam dolores provident quisquam`,
    image: program1,
    requirements: [
      `Basic knowledge in programming`,
      `Basic knowledge in electronics`,
      `Lorem ipsum`
    ],
    programLength: 6,
    programCertification: `yes`,
    careerOptions: `Programming with different languages`,
    instructor: instructor1,
    instructorName: `Bernado Acheampong`
  },
  {
    topic: `Digital Marketing`,
    body: `Learn the modern way marketing products through social media`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error laborum dolorem beatae rem, minus unde fugiat, impedit inventore cupiditate architecto hic accusamus natus quidem debitis? Unde, sed maiores? Corporis a laborum, architecto tempora eos, modi eius nesciunt fugiat fugit ducimus est impedit? Inventore soluta architecto, aperiam dolores provident quisquam`,
    image: program2,
    requirements: [
      `Basic knowledge in programming`,
      `Basic knowledge in electronics`,
      `Lorem ipsum`
    ],
    programLength: 6,
    programCertification: `yes`,
    careerOptions: `marketting`,
    instructor: instructor1,
    instructorName: `Kofi Kwarteng`
  },
  {
    topic: `Digital Fabrication`,
    body: `Engage in 3d modelling softwares and begin your 3D printing journey`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error laborum dolorem beatae rem, minus unde fugiat, impedit inventore cupiditate architecto hic accusamus natus quidem debitis? Unde, sed maiores? Corporis a laborum, architecto tempora eos, modi eius nesciunt fugiat fugit ducimus est impedit? Inventore soluta architecto, aperiam dolores provident quisquam`,
    image: program3,
    requirements: [
      `Basic knowledge in programming`,
      `Basic knowledge in electronics`,
      `Lorem ipsum`
    ],
    programLength: 6,
    programCertification: `yes`,
    careerOptions: `embeded circuit architect`,
    instructor: instructor1,
    instructorName: `Ken Kennedy`
  },
  {
    topic: `Internet of Things`,
    body: `Let's dive into the world of eltetronics and build`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error laborum dolorem beatae rem, minus unde fugiat, impedit inventore cupiditate architecto hic accusamus natus quidem debitis? Unde, sed maiores? Corporis a laborum, architecto tempora eos, modi eius nesciunt fugiat fugit ducimus est impedit? Inventore soluta architecto, aperiam dolores provident quisquam`,
    image: program4,
    requirements: [
      `Basic knowledge in programming`,
      `Basic knowledge in electronics`,
      `Lorem ipsum`
    ],
    programLength: 6,
    programCertification: `yes`,
    careerOptions: `IOT developer, IOT specialist, embeded circuit architect`,
    instructor: instructor1,
    instructorName: `Princess Phila Banini`
  }
];

const courses = [
  {
    topic: `Introduction to IOT`,
    course: `Internet of things`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 4
  },
  {
    topic: `Introduction to Arduino Programming`,
    course: `Internet of things`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 5
  },
  {
    topic: `Electronics 101`,
    course: `Internet of things`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 3
  },
  {
    topic: `Introduction to IOT`,
    course: `Internet of things`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 4
  },
  {
    topic: `Introduction to IOT`,
    course: `Digital Fabrication`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 4
  },
  {
    topic: `Introduction to Arduino Programming`,
    course: `Digital Fabrication`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 5
  },
  {
    topic: `Electronics 101`,
    course: `Digital Fabrication`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 3
  },
  {
    topic: `Introduction to IOT`,
    course: `Digital Marketing`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 4
  },
  {
    topic: `Introduction to IOT`,
    course: `Digital Marketing`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 4
  },
  {
    topic: `Introduction to Arduino Programming`,
    course: `Digital Marketing`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 5
  },
  {
    topic: `Electronics 101`,
    course: `ICT & Programming`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 3
  },
  {
    topic: `Introduction to IOT`,
    course: `ICT & Programming`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae minima qui molestias possimus delectus atque laborum, labore recusandae, quod eligendi est dignissimos unde.`,
    duration: 4
  }
];

export { programs, courses };
