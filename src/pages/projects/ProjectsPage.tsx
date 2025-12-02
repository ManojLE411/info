import React, { useState } from 'react';
import { ExternalLink, Github, FolderOpen, ArrowLeft, Code, Rocket, Send, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockProjects } from '@/data/mockData';
import type { Project } from '@/types/common.types';
import styles from './ProjectsPage.module.css';

export const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const projects = mockProjects;
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ['All', 'AI/ML', 'Web', 'Data Science', 'IoT', 'VLSI'];
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML': return <Code size={24} />;
      case 'Web': return <Rocket size={24} />;
      case 'VLSI': return <Code size={24} />;
      case 'IoT': return <Rocket size={24} />;
      case 'Data Science': return <Code size={24} />;
      default: return <FolderOpen size={24} />;
    }
  };

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const handleViewProject = (project: Project) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedProject(project);
  };

  const handleBackToList = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedProject(null);
  };

  if (selectedProject) {
    return (
      <div className={styles.projectDetail}>
        <div className={styles.projectDetailContent}>
          <button onClick={handleBackToList} className={styles.backButton}>
            <ArrowLeft size={20} className={styles.backIcon} /> Back to Projects
          </button>
          <div className={styles.projectHeader}>
            <span className={styles.projectCategoryBadge}>{selectedProject.category}</span>
            <div className={styles.projectTitleSection}>
              <div className={styles.projectIconContainer}>
                {getCategoryIcon(selectedProject.category)}
              </div>
              <h1 className={styles.projectDetailTitle}>{selectedProject.title}</h1>
            </div>
            <p className={styles.projectDetailDescription}>{selectedProject.description}</p>
            <div className={styles.projectMeta}>
              <span className={styles.projectMetaItem}><Code size={16} /> {selectedProject.techStack.length} Technologies</span>
              <span className={styles.projectMetaItem}><FolderOpen size={16} /> {selectedProject.category} Project</span>
            </div>
          </div>
          <div className={styles.projectImage}>
            <img src={selectedProject.image} alt={selectedProject.title} />
          </div>
          <div className={styles.projectContent}>
            <h2 className={styles.projectTechStackTitle}>Technology Stack & Tools</h2>
            <p className={styles.projectTechStackIntro}>
              This project leverages the following technologies and tools to deliver innovative solutions:
            </p>
            <div className={styles.projectTechStackGrid}>
              {selectedProject.techStack.map((tech, idx) => (
                <div key={idx} className={styles.techStackCard}>
                  <div className={styles.techStackIcon}><Code size={18} /></div>
                  <span className={styles.techStackName}>{tech}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.projectCta}>
            <h3 className={styles.projectCtaTitle}>Interested in This Project?</h3>
            <p className={styles.projectCtaDescription}>
              Let's discuss how we can help bring your vision to life with similar innovative solutions.
            </p>
            <div className={styles.projectCtaButtons}>
              <button onClick={() => navigate('/contact')} className={styles.projectCtaPrimary}>
                <Send size={16} /> Get in Touch
              </button>
              <button onClick={handleBackToList} className={styles.projectCtaSecondary}>
                View All Projects
              </button>
            </div>
            <div className={styles.projectLinks}>
              <a href="#" className={styles.projectLink} title="View on GitHub"><Github size={18} /> GitHub</a>
              <a href="#" className={styles.projectLink} title="View Live Demo"><ExternalLink size={18} /> Live Demo</a>
            </div>
          </div>
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
            <Sparkles size={16} />
            <span>Our Portfolio</span>
          </div>
          <h1 className={styles.heroTitle}>Innovative Software Solutions</h1>
          <p className={styles.heroDescription}>
            Delivering cutting-edge projects across AI/ML, Web Development, Cloud Infrastructure, 
            and Enterprise Applications. Explore our portfolio of transformative solutions.
          </p>
        </div>
        <div className={styles.heroScrollIndicator}>
          <div className={styles.scrollDot}></div>
        </div>
      </section>

      <div className={styles.mainContent}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Browse Projects</span>
          <h2 className={styles.sectionTitle}>Featured Work</h2>
          <p className={styles.sectionDescription}>
            Filter by category to explore our diverse range of software solutions and innovations.
          </p>
        </div>

        <div className={styles.filterTabs}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`${styles.filterTab} ${filter === cat ? styles.filterTabActive : styles.filterTabInactive}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className={styles.emptyState}>
            <FolderOpen size={48} className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>No Projects Found</h3>
            <p className={styles.emptyText}>
              We don't have any projects in this category yet. Check back soon for new additions!
            </p>
          </div>
        ) : (
          <div className={styles.projectsGrid}>
            {filteredProjects.map(project => (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.projectImageContainer}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <span className={styles.projectCategory}>{project.category}</span>
                </div>
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTechStack}>
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className={styles.techTagMore}>+{project.techStack.length - 3} more</span>
                    )}
                  </div>
                  <div className={styles.projectFooter}>
                    <button onClick={() => handleViewProject(project)} className={styles.viewDetailsButton}>
                      View Details <FolderOpen className={styles.viewDetailsIcon} />
                    </button>
                    {/* <div className={styles.projectLinks}>
                      <a href="#" className={styles.projectLink} title="GitHub"><Github size={18} /></a>
                      <a href="#" className={styles.projectLink} title="Live Demo"><ExternalLink size={18} /></a>
                    </div> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
