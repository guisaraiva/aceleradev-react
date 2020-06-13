import React from "react";
import { Switch } from "react-router-dom";
import { WelcomeBox } from "../components";
import { Categories, Dashboard, PrivateRoute, Topbar } from "../containers";
import PlaylistsRoute from "./PlaylistsRoute";
import TracksRoute from "./TracksRoute";
import { useDashboardRoute } from "../utils/hooks";

const DashboardRoute = () => {
  const { getUseDashboardRoute } = useDashboardRoute();
  return (
    <Dashboard>
      <Topbar />
      <Switch>
        <PrivateRoute exact path={getUseDashboardRoute.path}>
          <WelcomeBox name={getUseDashboardRoute.user.name} />
          <Categories
            isLoading={
              getUseDashboardRoute.content.status === "running" &&
              getUseDashboardRoute.content.categories.length === 0
            }
            data={getUseDashboardRoute.content.categories}
            url={getUseDashboardRoute.url}
          />
        </PrivateRoute>
        <PrivateRoute exact path={`${getUseDashboardRoute.path}/:categoryId`}>
          <PlaylistsRoute path={getUseDashboardRoute.path} />
        </PrivateRoute>
        <PrivateRoute
          exact
          path={`${getUseDashboardRoute.path}/:categoryId/:playlistId`}
        >
          <TracksRoute />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  );
};

export default DashboardRoute;
