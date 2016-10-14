/**
 *
 * Wechaty: Wechat for Bot. and for human who talk to bot/robot
 *
 * Class Io
 * http://www.wechaty.io
 *
 * Licenst: ISC
 * https://github.com/zixia/wechaty
 *
 * Helper Class for Manage State Change
 */
import test from 'ava'

import StateMonitor from './state-monitor'

test('StateMonitor smoking test', t => {

  const sm = new StateMonitor<'A', 'B'>('A')
  t.is(sm.current(), 'A', 'current should be A')
  t.is(sm.target(), 'A', 'target should be A')
  t.true(sm.stable(), 'should be stable')

  sm.current('B')
  t.is(sm.current(), 'B', 'current should be B')
  t.is(sm.target(), 'A', 'target should still be A')
  t.true(sm.stable(), 'should be stable')

  sm.current('B', false)
  t.is(sm.current(), 'B', 'current should be B')
  t.is(sm.target(), 'A', 'target should still be A')
  t.false(sm.stable(), 'should be not stable')

  sm.target('B')
  sm.current('B')
  t.is(sm.target(), 'B', 'target should still be B')
  t.is(sm.current(), 'B', 'current should be B')
  t.true(sm.stable(), 'should be stable')

  sm.target('A')
  sm.current('A', false)
  t.is(sm.target(), 'A', 'target should still be A')
  t.is(sm.current(), 'A', 'current should be A')
  t.false(sm.stable(), 'should not be stable')
})
