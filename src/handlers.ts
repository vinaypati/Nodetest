import { Request, Response } from 'express';

export const v1Handler = (req: Request, res: Response) => {

  const { data } = req.body;

  const dataSplitOnZero = data.match(/(.)\1*/g);

  const list: Array<string> = [];

  const currentListIndex = 0;
  let str = '';
  for (let i = 0; i < dataSplitOnZero.length; i++) {
    if (i === (dataSplitOnZero.length - 1)) {
      str = str + dataSplitOnZero[i];
      list.push(str);
      str = '';
    } else if (dataSplitOnZero[i].length === 1) {
      str = str + dataSplitOnZero[i];
    } else if (dataSplitOnZero[i].length > 1 && Number(dataSplitOnZero[i]) === 0) {
      str = str + dataSplitOnZero[i];
      list.push(str);
      str = ''
    } else if (dataSplitOnZero[i].length > 1 && Number(dataSplitOnZero[i]) > 0) {
      str = str + dataSplitOnZero[i];
    }
  }

  const result = {
    firstName: list[0],
    lastName: list[1],
    clientId: list[2]
  };

  return res.json({ statusCode: 200, data: result });
};

export const v2Handler = (req: Request, res: Response) => {
  const { data } = req.body;

  const dataSplitOnZero = data.match(/(.)\1*/g);

  const list: Array<string> = [];

  const currentListIndex = 0;
  let str = '';
  for (let i = 0; i < dataSplitOnZero.length; i++) {
    if (i === (dataSplitOnZero.length - 1)) {
      str = str + dataSplitOnZero[i];
      list.push(str);
      str = '';
    } else if (dataSplitOnZero[i].length === 1) {
      str = str + dataSplitOnZero[i];
    } else if (dataSplitOnZero[i].length > 1 && Number(dataSplitOnZero[i]) === 0) {
      list.push(str);
      str = ''
    } else if (dataSplitOnZero[i].length > 1 && Number(dataSplitOnZero[i]) > 0) {
      str = str + dataSplitOnZero[i] + '-';
    }
  }

  const result = {
    firstName: list[0],
    lastName: list[1],
    clientId: list[2]
  };

  return res.json({ statusCode: 200, data: result });
};
