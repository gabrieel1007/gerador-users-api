import { describe, expect, it } from 'vitest';

describe('My Test Suite Faieled', () => {
  it('Failed', () => {
    const ok: boolean = false;

    expect(ok).toBe(true);
  });
});
