import { useRouter } from "next/router";
import React from "react";
import PostContainer from "../../../components/contentDashboard/ContentPostContainer";

const DatingPost = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <PostContainer id={id} />
    </div>
  );
};

export default DatingPost;
