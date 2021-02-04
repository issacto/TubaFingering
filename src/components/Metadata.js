import React from 'react';
import MetaTags from 'react-meta-tags';


export default class MetaComponent extends React.Component {
  render() {
   return (
    <div className="wrapper">
      <MetaTags>
        <title>{this.props.title}</title>
        <meta property="og:type" content="website" />
        <meta name="description" content={this.props.description} />
        <meta name="og:description" content={this.props.description} />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:site_name" content={"content"} 
         />
        {
          this.props.jsonLd && 
            <JsonLd data={this.props.jsonLd} />
        }
      </MetaTags>
    </div>
  )
 }
}