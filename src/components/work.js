import React, { Component } from "react";
import Img from "gatsby-image";

export default class work extends Component {  
  render() {
  const { data } = this.props;
  const uniqByKeepLast = (data, key) => {
     return [
       ...new Map(
         data.map(x => [key(x), x])
       ).values()
     ]
   }
   const result = uniqByKeepLast(data.edges, i => i.node.siteName)
    return (
      <div className="work section" id="Work">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Work</h2>
          </div>
          <ul className="work-list">
            {result.map((item, index) => {
              return (
                <li key={index} className="item">
                  <div className="inner">
                    <a href={item.node.url}>
                      <Img
                        fixed={item.node.image.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                      <span className="name">{item.node.siteName}</span>
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
