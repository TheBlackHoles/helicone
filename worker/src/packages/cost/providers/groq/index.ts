/**
 *
 * DO NOT EDIT THIS FILE UNLESS IT IS IN /costs
 */

import { ModelRow } from "../../interfaces/Cost";

export const costs: ModelRow[] = [
  {
    model: {
      operator: "equals",
      value: "llama2-70b-4096",
    },
    cost: {
      prompt_token: 0.0000007,
      completion_token: 0.0000008,
    },
  },
  {
    model: {
      operator: "equals",
      value: "mixtral-8x7b-32768",
    },
    cost: {
      prompt_token: 0.00000027,
      completion_token: 0.00000027,
    },
  },
  {
    model: {
      operator: "equals",
      value: "gemma-7b-8192",
    },
    cost: {
      prompt_token: 0.0000001,
      completion_token: 0.0000001,
    },
  },
];
