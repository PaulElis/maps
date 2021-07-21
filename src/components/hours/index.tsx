// PART 3
// Implement retailer hours
// Using the provided component Time render the business hours for the whole week

// Include day and times for each day of the week
// Monday: Closed
// Tuesday: 8:00am to 8:00pm

import Typography from "@material-ui/core/Typography";

import React from "react";
import styled, { StyledComponent } from "styled-components";

type TestId = {
  "data-testid": string;
};
type StyleProps = {};
const TimeWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>``;
const ClosedWrapper = styled(TimeWrapper)``;
const DayWrapper = styled(TimeWrapper)``;

function HoursOfBusiness({ businessHours }: { businessHours: any }) {
  const renderDaysofBusiness = Object.entries(businessHours).map(
    (business: any) => {
      const dayOfWeek =
        business[0].charAt(0).toUpperCase() + business[0].slice(1);
      const txt = `${dayOfWeek}: ${business[1].open} to ${business[1].close}`;

      return business[1].is_closed ? (
        <Typography
          key={business[0]}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {dayOfWeek}
          <span>:&nbsp;</span>
          <Closed day={business[0]}></Closed>
        </Typography>
      ) : (
        <Typography
          key={business[0]}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          <Time time={txt} day={business[0]} frame="open" />
        </Typography>
      );
    }
  );

  return <>{renderDaysofBusiness}</>;
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default HoursOfBusiness;
type Day =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";
type Frame = "open" | "close";

function Day({ day }: { day: Day }) {
  return <DayWrapper data-testid={day}>{day}</DayWrapper>;
}

// use this when is_closed: true is returned
// NOTE: if you are not seeing retailers that return is_closed,
// change your latlng to Los Angeles. Many doctors are closed on the weekend.
function Closed({ day }: { day: Day }) {
  return <ClosedWrapper data-testid={`${day}-closed`}>Closed</ClosedWrapper>;
}

function Time({ time, day, frame }: { time?: string; day: Day; frame: Frame }) {
  return <TimeWrapper data-testid={`${day}-${frame}`}>{time}</TimeWrapper>;
}
