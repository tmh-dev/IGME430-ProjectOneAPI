import React from 'react'

const PostField = (props) => {
    return (
        <div className="field">
            <label>{props.placeholder}</label>
            <input type="text" 
                placeholder={props.placeholder} 
                data-tag={props.dataTag}
                value={props.value}
                onChange={props.handleOnChange}>
            </input>
        </div>
    );
};

export default PostField;