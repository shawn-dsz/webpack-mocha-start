"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isGuid = isGuid;

/**
 * Validation methods
 */
function isGuid(guid) {
  return (/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(guid)
  );
}