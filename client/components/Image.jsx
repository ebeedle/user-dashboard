import React from 'react';

class ImageUpload extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="form-group">
        <label > Image Upload </label>
        <input type="file" onChange={this.props.onChange} />
      </div>
    )
  }
}

export default ImageUpload;