import React from "react";
import Head from "../../../helper/head/Head";
import useFetch from "../../../hooks/usefetch/useFetch";
import { STATS_GET } from "../../../api";
import Loading from "../../../helper/loading/Loading";
import Erro from "../../../helper/erro/Erro";

const UserStatsGraphs = React.lazy(() =>
  import("../userstatsgraphs/UserStatsGraphs")
);

const UserStats = () => {
  const { data, error, request, loading } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Erro error={error} />;
  if (data)
    return (
      <React.Suspense fallback={loading}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
