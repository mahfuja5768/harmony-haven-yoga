import Image from 'next/image';
import blog1 from '../../assets/images/blog-1.jpg';
import blog2 from '../../assets/images/blog-2.jpg';
import blog3 from '../../assets/images/blog-3.jpg';
import Container from '../shared/Container';
import SectionTitle from '../shared/SectionTitle';


const Blog = () => {
    return (
        <Container>
            <SectionTitle heading={'Yoga Postures'}/>
            <div className='flex gap-4 lg:flex-row flex-wrap justify-center' >
             <Image src={blog1} alt="LogoImg" />
             <Image src={blog2} alt="LogoImg" />
             <Image src={blog3} alt="LogoImg" />
        </div>
        </Container>
    );
};

export default Blog;