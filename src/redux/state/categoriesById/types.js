// @flow

export type ActiveCategoryId = number | null;

export type Category = {
  id: number,
  title: string,
  children: Array<number>,
  parent: number | null,
  tasks: Array<number>,
};
