import styled from "styled-components";
import { trpc } from "../utils";

const Data = styled.code`
  padding: 8px;
  background-color: #363636;
  border-radius: 4px;
`;

type Props = { page: string };

export const Hello = ({ page }: Props) => {
  const hello = trpc.helloWorld.useQuery({ page });

  return (
    <>
      <p>Query status: {hello.status}</p>
      {hello.data && <Data>{hello.data}</Data>}
    </>
  );
};
