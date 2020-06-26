import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {Link} from 'gatsby'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import BlockText from './block-text'
import Container from './container'

import styles from './project.module.css'

function Project (props) {
  const {_rawExcerpt, title, categories, mainImage, publishedAt, client, gallery, relatedProjects} = props
  console.log(relatedProjects)
  return (
    <article className={styles.root}>
      <Container>
        {props.mainImage && mainImage.asset && (
          <div className={styles.mainImage}>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )}
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {_rawExcerpt && <BlockText blocks={_rawExcerpt || []} />}
          </div>
          <aside className={styles.metaContent}>
            {client &&
              <div>{client}</div>
            }
            {categories && categories.length > 0 && (
              <div className={styles.categories}>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        {gallery.length && (
          <div className={styles.gallery}>
            {gallery.map((row, index) => (
              <div key={`gallery-row-${index}`}>
                {row.__typename === 'SanityFigure' ? (
                  <div  className={styles.galleryOneColumn}>
                    <img
                      src={imageUrlFor(buildImageObj(row))
                        .width(1200)
                        .fit('crop')
                        .url()}
                      alt={row.alt}
                    />
                  </div>
                ) : (
                  <div className={styles.galleryTwoColumn}>
                    <img
                      src={imageUrlFor(buildImageObj(row.image1))
                        .width(800)
                        .fit('crop')
                        .url()}
                      alt={row.image1.alt}
                    />
                    <img
                      src={imageUrlFor(buildImageObj(row.image2))
                        .width(800)
                        .fit('crop')
                        .url()}
                      alt={row.image2.alt}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {relatedProjects && relatedProjects.length > 0 && (
          <div className={styles.relatedProjects}>
            <h3 className={styles.relatedProjectsHeadline}>Lignende prosjekter</h3>
            <ul>
              {relatedProjects.map(project => (
                <li key={`related_${project._id}`}>
                  {project.slug ? (
                    <div>
                      <Link to={`/prosjekt/${project.slug.current}`}>
                        {project.mainImage && mainImage.asset && (
                          <div>
                            <img
                              src={imageUrlFor(buildImageObj(project.mainImage))
                                .width(600)
                                .height(Math.floor((3 / 4) * 600))
                                .fit('crop')
                                .url()}
                              alt={project.mainImage.alt}
                            />
                          </div>
                        )}
                        <h2>{project.title}</h2>
                      </Link>
                    </div>
                  ) : (
                    <span>{project.title}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </article>
  )
}

export default Project
