import React from 'react'

import play from '../../assets/icons/play.svg'
import pause from '../../assets/icons/pause.svg'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Flow = ({ context: { context }, data }) => {
  const name = 'flow';
  function setPlaylist(e) {
    if(data.tracks && !context.playlist.name !== name) {
      context.updatePlaylist({tracks : data.tracks , name})
    }
  }

  return (
    <React.Fragment>
      <div className="panel-header">
      </div>
      <div className="flow">
        <div className="card">
          <div className="play" onClick={setPlaylist}>
            <img src={context.playing ? pause : play} alt="" className="play--icon" />
          </div>
        </div>
        <div className="card">
          <div className="play">
            <img src={play} alt="" className="play--icon" />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default graphql(gql`
  query flowQuery {
    tracks(filter:"Electronic", limit: 80) {
      title
      streamUrl
      thumb
    }
  }
`)(Flow);
