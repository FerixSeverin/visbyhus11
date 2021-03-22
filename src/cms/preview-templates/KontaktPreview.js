import React from 'react'
import PropTypes from 'prop-types'
import { KontaktTemplate } from '../../templates/kontakt'

const KontaktPreview = ({ entry, widgetFor }) => (
  <KontaktTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

KontaktPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default KontaktPreview
