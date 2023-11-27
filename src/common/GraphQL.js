import gql from "graphql-tag";

export const GET_CARDICT = gql`
  query getCardIct($uuid: String!) {
    cardIct(uuid: $uuid) {
      uuid
      eng
      password
    }
  }
`;

export const GET_CARDICTS = gql`
  query getCardIcts {
    cardIcts {
      uuid
      eng
      password
    }
  }
`;

export const GET_RESARCH = gql`
  query getResarch($uuid: String!) {
    resarch(uuid: $uuid) {
      uuid
      kor
      eng
      file
      content
      Project
      date
      link
    }
  }
`;

export const GET_RESARCHS = gql`
  query getResarchs {
    resarchs {
      uuid
      kor
      eng
      file
      content
      Project
      date
      link
    }
  }
`;

export const GET_FIELD = gql`
  query getField($uuid: String!) {
    field(uuid: $uuid) {
      uuid
      kor
      eng
      file
      content
      Project
      link
    }
  }
`;

export const GET_FIELDS = gql`
  query getFields {
    fields {
      uuid
      kor
      eng
      file
      content
      Project
      link
    }
  }
`;

export const GET_TOPIMGPAGE = gql`
  query getTopImgPage($uuid: String!) {
    topImgPage(uuid: $uuid) {
      uuid
      kor
      eng
      file
      link
      alt
    }
  }
`;

export const GET_TOPIMGPAGES = gql`
  query getTopImgPages {
    topImgPages {
      uuid
      kor
      eng
      file
      link
      alt
    }
  }
`;
