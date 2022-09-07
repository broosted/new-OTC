import React from 'react';

export function Rating() {
    return (
      <div className="uk-container">
          <span  class="{{item.class_str}}" click="indexClick($event,item.id)"></span>
      </div>
    ) }
