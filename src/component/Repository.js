import React from "react";
import { GET_REPOSITORY } from "../graphql/Query";
import { useQuery } from "@apollo/client";
import RepoIcon from "../svgs/RepoIcon";
import StarIcon from "../svgs/StarIcon";
import ForkIcon from "../svgs/ForkIcon";

const Repository = ({
  username,
  repository,
  theme,
  showStarCount,
  showForkCount,
  showLanguage,
  showDescription,
  showType,
}) => {
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { username, repository },
  });

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  console.log(data);

  return (
    <div className="rounded-md p-4 max-w-xs w-full border-2 border-border-default bg-canvas-default">
      <div className="flex items-center gap-2">
        <RepoIcon />
        <a
          href={data.repository.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-fg-accent hover:underline text-sm font-semibold"
        >
          <p className="leading-5">{data.repository.name}</p>
        </a>
      </div>
      {showDescription && (
        <p className="text-xs text-fg-muted mt-2 leading-5">
          {data.repository.description}
        </p>
      )}
      <p className="flex items-center gap-4 mt-2">
        {showStarCount && (
          <a
            href={`${data.repository.url}/stargazers`}
            className="flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StarIcon />
            <span className="text-xs text-fg-muted leading-5">
              {data.repository.stargazers.totalCount}
            </span>
          </a>
        )}
        {showForkCount && (
          <a
            href={`${data.repository.url}/network/members`}
            className="flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ForkIcon />
            <span className="text-xs text-fg-mutedleading-5">
              {data.repository.forks.totalCount}
            </span>
          </a>
        )}
      </p>
    </div>
  );
};

export default Repository;
