import React from 'react';

const ResourceItem = (props) => {
  return (
    <div class="ui link cards">
      <div class="card">
        <div class="video">
          <iframe src={props.source} >
            </iframe>
        </div>
        <div class="content">
          <div class="header">{props.name}</div>
          <div class="meta">
            <a>{props.type}</a>
          </div>
          <div class="description">
            {props.description}
      </div>
        </div>
        <div class="extra content">
        </div>
      </div>
        </div>
  )
};

export default ResourceItem;