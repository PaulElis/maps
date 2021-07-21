// PART 2
// Implement a star rating

// Given a rating X, render the star rating. Be sure to wrap the corresponding
// star within the provided components.

// Using EmptyStar, HalfStar, and FullStar wrappers, pass your star component to
// the corresponding wrappers

// Star decimals equate to:
// ((0, .25]) <- empty star
// ((.25, .75]) <- half star
// ((.75, 1]) <- full star
// where ( means inclusive and ] means exclusive

// Example:
// 0.1 = 5 empty stars
// 4.25 = 4 full stars, 1 half star
// 4.24 = 4 full stars, 1 empty star
// 4.74 = 4 full stars, 1 half star
// 4.75 = 5 full stars

import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";

import React from "react";
import styled, { StyledComponent } from "styled-components";

type StarProps = {
  children?: any;
};
type RatingProps = {
  rating: number;
};
type StyleProps = {};
type StarsProps = {
  rating: number;
};
type TestId = {
  "data-testid": string;
};
const StarWrapper: StyledComponent<
  "div",
  any,
  TestId,
  never
> = styled.div<StyleProps>``;
const RatingWrapper = styled(StarWrapper)``;

const renderStars = (rating: number) => {
  if (rating < 0.25) {
    return new Array(5).fill("*").map((_, index) => (
      <EmptyStar key={index}>
        <StarBorderRoundedIcon />
      </EmptyStar>
    ));
  }
  const valFullStars = parseInt(rating.toString().split(".")[0]);
  const valPartialStars = parseFloat(rating.toString().slice(1));
  const numHalfStar = valPartialStars >= 0.25 && valPartialStars < 0.75 ? 1 : 0;
  const numEmptyStars =
    5 - parseInt(rating.toString().split(".")[0]) - numHalfStar;

  const renderFullStars = () => {
    return new Array(valFullStars).fill("*").map((_, index) => (
      <FullStar key={index}>
        <StarRoundedIcon />
      </FullStar>
    ));
  };

  const renderEmptyStars = () => {
    return new Array(numEmptyStars)
      .fill(() => 1)
      .map((_, index) => (
        <EmptyStar key={index}>
          <StarBorderRoundedIcon />
        </EmptyStar>
      ));
  };

  return (
    <>
      {renderFullStars()}
      {numHalfStar === 1 && (
        <HalfStar>
          <StarHalfRoundedIcon />
        </HalfStar>
      )}
      {numEmptyStars > 0 && renderEmptyStars()}
    </>
  );
};

function Stars({ rating }: StarsProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Rating rating={rating} />
      {rating && renderStars(rating)}
    </div>
  );
}

// ~~~~~~~~~~~~~~~~ DO NOT MODIFY BELOW THIS LINE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export default Stars;

function EmptyStar({ children, ...rest }: StarProps) {
  return (
    <StarWrapper data-testid="empty-star" {...rest}>
      {children}
    </StarWrapper>
  );
}

function HalfStar({ children, ...rest }: StarProps) {
  return (
    <StarWrapper data-testid="half-star" {...rest}>
      {children}
    </StarWrapper>
  );
}

function FullStar({ children, ...rest }: StarProps) {
  return (
    <StarWrapper data-testid="full-star" {...rest}>
      {children}
    </StarWrapper>
  );
}

function Rating({ rating, ...rest }: RatingProps) {
  return (
    <RatingWrapper data-testid="rating" {...rest}>
      {rating.toFixed(1)}
    </RatingWrapper>
  );
}
