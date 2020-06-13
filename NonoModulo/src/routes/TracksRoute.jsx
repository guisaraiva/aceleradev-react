import React from "react";
import { getContentNameById } from "../modules/helpers";
import { Tracks } from "../containers";
import { useTrackRoute } from "../utils/hooks";

const TracksRoute = ({ path }) => {
  const { content, playlistId } = useTrackRoute();
  return (
    <Tracks
      categoryName={getContentNameById(playlistId, content.playlists)}
      data={content.tracks}
      isLoading={content.status === "running"}
      path={path}
    />
  );
};
export default TracksRoute;