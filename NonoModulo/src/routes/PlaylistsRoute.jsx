import React from "react";
import { Playlists } from "../containers";
import { getContentNameById } from "../modules/helpers";
import { usePlaylistRoute } from "../utils/hooks";

const PlaylistsRoute = ({ path }) => {
  const { categoryId, content } = usePlaylistRoute();
  return (
    <Playlists
      categoryId={categoryId}
      categoryName={getContentNameById(categoryId, content.categories)}
      data={content.playlists}
      isLoading={content.status === "running" && content.playlists.length === 0}
      path={path}
    />
  );
};

export default PlaylistsRoute;