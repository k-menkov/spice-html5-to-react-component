"use strict";
/*
   Copyright (C) 2012 by Jeremy P. White <jwhite@codeweavers.com>

   This file is part of spice-html5.

   spice-html5 is free software: you can redistribute it and/or modify
   it under the terms of the GNU Lesser General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   spice-html5 is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public License
   along with spice-html5.  If not, see <http://www.gnu.org/licenses/>.
*/

/*----------------------------------------------------------------------------
**  Spice messages
**      This file contains classes for passing messages to and from
**  a spice server.  This file should arguably be generated from
**  spice.proto, but it was instead put together by hand.
**--------------------------------------------------------------------------*/


export {
  SpiceLinkHeader,
  SpiceLinkMess,
  SpiceLinkReply,
  SpiceLinkAuthTicket,
  SpiceLinkAuthReply,
  SpiceMiniData,
  SpiceMsgChannels,
  SpiceMsgMainInit,
  SpiceMsgMainMouseMode,
  SpiceMsgMainAgentData,
  SpiceMsgMainAgentTokens,
  SpiceMsgSetAck,
  SpiceMsgcAckSync,
  SpiceMsgcMainMouseModeRequest,
  SpiceMsgcMainAgentStart,
  SpiceMsgcMainAgentData,
  VDAgentAnnounceCapabilities,
  VDAgentMonitorsConfig,
  VDAgentFileXferStatusMessage,
  VDAgentFileXferStartMessage,
  VDAgentFileXferDataMessage,
  SpiceMsgNotify,
  SpiceMsgcDisplayInit,
  SpiceMsgDisplayBase,
  SpiceMsgDisplayDrawCopy,
  SpiceMsgDisplayDrawFill,
  SpiceMsgDisplayCopyBits,
  SpiceMsgSurfaceCreate,
  SpiceMsgSurfaceDestroy,
  SpiceMsgInputsInit,
  SpiceMsgInputsKeyModifiers,
  SpiceMsgCursorInit,
  SpiceMsgPlaybackData,
  SpiceMsgPlaybackMode,
  SpiceMsgPlaybackStart,
  SpiceMsgCursorSet,
  SpiceMsgcMousePosition,
  SpiceMsgcMouseMotion,
  SpiceMsgcMousePress,
  SpiceMsgcMouseRelease,
  SpiceMsgcKeyDown,
  SpiceMsgcKeyUp,
  SpiceMsgDisplayStreamCreate,
  SpiceStreamDataHeader,
  SpiceMsgDisplayStreamData,
  SpiceMsgDisplayStreamDataSized,
  SpiceMsgDisplayStreamClip,
  SpiceMsgDisplayStreamDestroy,
  SpiceMsgDisplayStreamActivateReport,
  SpiceMsgcDisplayStreamReport,
  SpiceMsgDisplayInvalList,
  SpiceMsgPortInit,
};
