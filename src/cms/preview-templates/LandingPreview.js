import React from 'react'
import PropTypes from 'prop-types'
import { LandingTemplate } from '../../templates/landing'

const LandingPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <LandingTemplate
        image={getAsset(data.image)}
        title={data.title}
        main={data.main || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

LandingPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LandingPreview
