import { createGlobalStyle } from "styled-components";

export const TypographyStyles = createGlobalStyle`
html {
  body {
    font-family: Ranchers;
  }
}

a {
  font-weight: 600;
  text-decoration: none;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
span,
button {
  color: ${(props) => props.theme.white};
  font-family: "Ranchers", cursive;
}

h1 {
  font-size: ${(props) => props.theme.size5};
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size7};
  }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size7};
  }
}

h2 {
  font-size: ${(props) => props.theme.size4};
    @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size5};
    }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size6};
  }
}

h3 {
  font-size: ${(props) => props.theme.size3};
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size4};
  }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size5};
  }
}

h4 {
  font-size: ${(props) => props.theme.size2};
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size3};
  }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size4};
  }
}

h5 {
  font-size: ${(props) => props.theme.size2};
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size3};
  }
  @media (min-width: ${(props) => props.theme.breakpoint_large}) {
    font-size: ${(props) => props.theme.size4};
  }
}

p {
  letter-spacing: 0.05em;
  @media (min-width: ${(props) => props.theme.breakpoint_medium}) {
    font-size: ${(props) => props.theme.size5};
  }
}

.black-border {
  text-shadow: -1px -1px 0 ${(props) => props.theme.black}, 1px -1px 0 ${(props) => props.theme.black}, -1px 1px 0 ${(
    props
  ) => props.theme.black}, 1px 1px 0 ${(props) => props.theme.black};
}

.white-color {
  color: ${(props) => props.theme.white};
}
`;
