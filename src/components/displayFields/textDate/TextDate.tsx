import styled from "styled-components";

import { Wrapper, TitleSpan } from "@components/displayFields/sharedStyles";

type Props = { fieldName: string; value: string };

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function formatHours(hour: number): any[] {
  const response: any[] = [];
  if (hour == 0) {
    response.push(12);
    response.push("AM");
  } else if (hour < 13) {
    response.push(hour);
    response.push("AM");
  } else {
    response.push(hour - 12);
    response.push("PM");
  }

  return response;
}

export function formatDate(
  dateString: string,
  dateOnly: boolean = false
): string {
  const date = new Date(dateString);

  if (date.toString() == "Invalid Date") return "";

  const hour = formatHours(date.getHours());
  let response = `${
    months[date.getMonth()]
  } ${date.getDay()}, ${date.getFullYear()}`;
  if (dateOnly) return response;

  response += ` ${hour[0]}:${date.getMinutes().toString().padStart(2, "0")} ${
    hour[1]
  }`;
  return response;
}

export function TextDate({ fieldName, value }: Props) {
  return (
    <Wrapper>
      <TitleSpan>{fieldName}</TitleSpan>{" "}
      <StyledDate>{formatDate(value)}</StyledDate>
    </Wrapper>
  );
}

const StyledDate = styled.span`
  border-bottom: 1px solid #c8c8c8;
`;
