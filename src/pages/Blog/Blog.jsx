import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCalendar, FiUser, FiArrowRight } from 'react-icons/fi'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import './Blog.css'

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt:
        'Exploring the latest trends and technologies shaping the future of web development, including React 19, Next.js, and serverless architectures.',
      author: 'John Doe',
      date: 'March 15, 2024',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x250?text=Web+Dev',
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt:
        'A comprehensive guide to migrating your infrastructure to the cloud, covering strategy, planning, and execution phases.',
      author: 'Jane Smith',
      date: 'March 10, 2024',
      category: 'Cloud Solutions',
      image: 'https://via.placeholder.com/400x250?text=Cloud',
    },
    {
      id: 3,
      title: 'Mobile App Security Essentials',
      excerpt:
        'Learn about the critical security measures every mobile app developer should implement to protect user data.',
      author: 'Mike Johnson',
      date: 'March 5, 2024',
      category: 'Security',
      image: 'https://via.placeholder.com/400x250?text=Security',
    },
    {
      id: 4,
      title: 'DevOps Automation Strategies',
      excerpt:
        'How to streamline your development workflow with CI/CD pipelines, containerization, and infrastructure as code.',
      author: 'David Brown',
      date: 'February 28, 2024',
      category: 'DevOps',
      image: 'https://via.placeholder.com/400x250?text=DevOps',
    },
    {
      id: 5,
      title: 'React Performance Optimization',
      excerpt:
        'Tips and techniques for optimizing React applications to improve performance and user experience.',
      author: 'John Doe',
      date: 'February 20, 2024',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x250?text=React',
    },
    {
      id: 6,
      title: 'Building Scalable APIs',
      excerpt:
        'Best practices for designing and building RESTful APIs that can scale with your business growth.',
      author: 'Jane Smith',
      date: 'February 15, 2024',
      category: 'Backend',
      image: 'https://via.placeholder.com/400x250?text=API',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="blog-page">
      <div className="blog-hero section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="blog-hero-content"
        >
          <h1>Blog</h1>
          <p className="blog-hero-subtitle">
            Insights, tutorials, and updates from our team
          </p>
          <p className="blog-hero-description">
            Stay updated with the latest trends, technologies, and best
            practices in software development.
          </p>
        </motion.div>
      </div>

      <section className="section blog-list">
        <motion.div
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Card className="blog-card">
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-image" />
                  <div className="blog-category">{post.category}</div>
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <span className="blog-meta-item">
                      <FiUser /> {post.author}
                    </span>
                    <span className="blog-meta-item">
                      <FiCalendar /> {post.date}
                    </span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" size="small">
                      Read More <FiArrowRight />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}

export default Blog
