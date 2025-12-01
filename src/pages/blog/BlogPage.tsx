import React, { useState } from 'react';
import { Calendar, User, ArrowLeft, ChevronRight, BookOpen } from 'lucide-react';
import { mockBlogPosts } from '@/data/mockData';
import type { BlogPost } from '@/types/blog.types';
import styles from './BlogPage.module.css';

export const BlogPage: React.FC = () => {
  const posts = mockBlogPosts;
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterCategory, setFilterCategory] = useState('All');

  const postsPerPage = 6;
  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];
  const filteredPosts = filterCategory === 'All' ? posts : posts.filter(p => p.category === filterCategory);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleViewPost = (post: BlogPost) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <div className={styles.postDetail}>
        <div className={styles.postDetailContent}>
          <button onClick={handleBackToList} className={styles.backButton}>
            <ArrowLeft size={20} className={styles.backIcon} /> Back to Articles
          </button>
          <div className={styles.postHeader}>
            <span className={styles.postCategory}>{selectedPost.category}</span>
            <h1 className={styles.postTitle}>{selectedPost.title}</h1>
            <div className={styles.postMeta}>
              <span className={styles.postMetaItem}><User size={16} /> {selectedPost.author}</span>
              <span className={styles.postMetaItem}><Calendar size={16} /> {selectedPost.date}</span>
            </div>
          </div>
          <div className={styles.postImage}>
            <img src={selectedPost.image} alt={selectedPost.title} />
          </div>
          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <BookOpen size={16} />
            <span>Latest Insights</span>
          </div>
          <h1 className={styles.heroTitle}>Technology Blog & News</h1>
          <p className={styles.heroDescription}>
            Stay updated with the latest trends, insights, and innovations in AI, Technology, 
            and Education. Expert articles from our team of professionals.
          </p>
        </div>
        <div className={styles.heroScrollIndicator}>
          <div className={styles.scrollDot}></div>
        </div>
      </section>

      <div className={styles.mainContent}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Browse Articles</span>
          <h2 className={styles.sectionTitle}>Featured Posts</h2>
          <p className={styles.sectionDescription}>
            Explore our collection of articles covering the latest in technology and innovation.
          </p>
        </div>

        <div className={styles.categories}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setFilterCategory(cat); setCurrentPage(1); }}
              className={`${styles.categoryTab} ${filterCategory === cat ? styles.categoryTabActive : styles.categoryTabInactive}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className={styles.emptyState}>
            <BookOpen size={48} className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>No Posts Found</h3>
            <p className={styles.emptyText}>
              We don't have any posts in this category yet. Check back soon for new articles!
            </p>
          </div>
        ) : (
          <>
            <div className={styles.postsGrid}>
              {currentPosts.map(post => (
                <article key={post.id} className={styles.postCard} onClick={() => handleViewPost(post)}>
                  <div className={styles.postImageContainer}>
                    <img src={post.image} alt={post.title} className={styles.postCardImage} />
                    <div className={styles.postCardCategory}>{post.category}</div>
                  </div>
                  <div className={styles.postCardContent}>
                    <div className={styles.postCardDate}>
                      <Calendar size={14} /> {post.date}
                    </div>
                    <h3 className={styles.postCardTitle}>{post.title}</h3>
                    <p className={styles.postCardExcerpt}>
                      {post.excerpt.length > 100 ? post.excerpt.substring(0, 100) + '...' : post.excerpt}
                    </p>
                    <div className={styles.postCardFooter}>
                      Read Article <ChevronRight size={16} />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))} 
                  disabled={currentPage === 1}
                  className={styles.paginationButton}
                >
                  Previous
                </button>
                <span className={styles.paginationInfo}>Page {currentPage} of {totalPages}</span>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))} 
                  disabled={currentPage === totalPages}
                  className={styles.paginationButton}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
