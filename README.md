# React Native Loading HOC

## Usage
```javascript
import React from 'react'
import loadingHoc from 'rn-loading-hoc'

const Post = ({ title }) => (
  <Text>{title}</Text>
)

export default loadingHoc(
  (props) => props.isLoading, // predicate fn (wheter the overlay should be active or not)
  { overlayColor: 'rgba(0,0,0,.6)' } // options
)(Post)
```