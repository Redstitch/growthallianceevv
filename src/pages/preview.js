import React, { Component } from 'react';
import Helmet from 'react-helmet';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';
import PageBanners from '../components/organisms/PageBanners';
import PageWidgets from '../components/organisms/PageWidgets';
import BlogBanner from '../components/organisms/banners/BlogBanner';
import PostWidgets from '../components/organisms/PostWidgets';
import RelatedPosts from '../components/molecules/RelatedPosts';

const { GATSBY_CMS } = process.env;

class Preview extends Component {
  state = {
    previewData: null,
    postType: null,
  };

  componentDidMount() {
    const splitIDs = global.window.location.search.replace('?', '').split('&');
    this.setState({ postType: splitIDs[1] });

    if (splitIDs[1] === 'page') {
      fetch(`${GATSBY_CMS}/wp-json/wp/v2/pages/${splitIDs[0]}?_embed`, {
        method: 'get',
      })
        .then(response => response.json())
        .then(data => {
          this.setState({ previewData: data });
        });
    }

    if (splitIDs[1] === 'post') {
      fetch(`${GATSBY_CMS}/wp-json/wp/v2/posts/${splitIDs[0]}?_embed`, {
        method: 'get',
      })
        .then(response => response.json())
        .then(data => {
          this.setState({ previewData: data });
        });
    }
  }

  render() {
    const { previewData, postType } = this.state;
    return (
      <Layout>
        <Helmet meta={[{ name: 'ROBOTS', content: 'NOINDEX, NOFOLLOW' }]} />
        {previewData && (
          <>
            {console.log(previewData)}
            {postType === 'page' && (
              <>
                <PageBanners
                  content={previewData.acf.banners}
                  preview
                  page={{
                    title: previewData.title.rendered,
                    mainImage: previewData.acf.main_image,
                    color: previewData.acf.page_color,
                    description: previewData.acf.description
                      ? previewData.acf.description
                      : null,
                  }}
                />
                <PageWidgets
                  preview
                  content={previewData.acf.widgets}
                  color={previewData.acf.page_color}
                />
              </>
            )}
            {postType === 'post' && (
              <>
                <BlogBanner
                  preview
                  page={{
                    title: previewData.title.rendered,
                    mainImage: previewData.acf.main_image,
                    color: 'navy',
                    description: null,
                  }}
                />
                <PostWidgets
                  preview
                  content={previewData.acf.post_content}
                  color="navy"
                />
                <RelatedPosts category={previewData.categories[0].slug} />
              </>
            )}
          </>
        )}
      </Layout>
    );
  }
}

export default Preview;
