# RCCG SL Member Registration API Endpoints

## Overview
This document outlines the data structure and payloads for the member registration endpoints.

---

## New Member Registration
**Endpoint:** `POST /api/v1/rccgsl/register-member/new`

### Request Body
```json
{
  "fullName": "string",
  "gender": "male" | "female",
  "address": "string",
  "phoneNumber": "string",
  "invitedBy": "string"
}
```

### Field Details
- **fullName** (required): Full name of the new member
  - Min length: 2 characters
  - Example: "John Doe"
  
- **gender** (required): Gender selection
  - Values: "male" or "female"
  
- **address** (required): Full residential address
  - Min length: 5 characters
  - Example: "123 Main Street, Freetown, Sierra Leone"
  
- **phoneNumber** (required): Contact phone number
  - Format: Valid phone number with optional country code
  - Regex`
  - Example: "+23276123456" or "0761234567"
  
- **invitedBy** (required): Name of person who invited them
  - Min length: 2 characters
  - Example: "Mary Johnson"

### Example Request
```json
{
  "fullName": "John Doe",
  "gender": "male",
  "address": "45 Sanders Street, Freetown, Sierra Leone",
  "phoneNumber": "+23276123456",
  "invitedBy": "Mary Johnson"
}
```

---

## Old Member Registration
**Endpoint:** `POST /api/v1/rccgsl/register-member/old`

### Request Body
```json
{
  "fullName": "string",
  "gender": "male" | "female",
  "address": "string",
  "phoneNumber": "string",
  "parish": "sl_headquarters" | "freetown_central" | "bo_municipal",
  "isWorker": boolean,
  "department": "string" (optional)
}
```

### Field Details
- **fullName** (required): Full name of the existing member
  - Min length: 2 characters
  - Example: "Jane Smith"
  
- **gender** (required): Gender selection
  - Values: "male" or "female"
  
- **address** (required): Full residential address
  - Min length: 5 characters
  - Example: "78 Wilberforce Road, Freetown"
  
- **phoneNumber** (required): Contact phone number
  - Format: Valid phone number with optional country code

  
- **parish** (required): Parish selection (enum)
  - Values: 
    - "sl_headquarters" → "RCCG SL Headquarters"
    - "freetown_central" → "Freetown Central Parish"
    - "bo_municipal" → "Bo Municipal Parish"
  
- **isWorker** (required): Boolean indicating if member is a church worker
  - Default: false
  - Example: true
  
- **department** (optional): Department name (required if isWorker is true)
  - Values: "Choir", "Ushering", "Sanctuary Keepers", "Technical/Media", "Children's Church", "Youth Ministry", "Evangelism", "Prayer Team", "Welfare", "Security", "Follow-up", "Other"
  - Only required when `isWorker` is true

### Example Requests

#### Regular Member (not a worker)
```json
{
  "fullName": "Jane Smith",
  "gender": "female",
  "address": "78 Wilberforce Road, Freetown",
  "phoneNumber": "+23288987654",
  "parish": "freetown_central",
  "isWorker": false
}
```

#### Church Worker
```json
{
  "fullName": "Michael Brown",
  "gender": "male",
  "address": "12 Pademba Road, Freetown",
  "phoneNumber": "+23276555432",
  "parish": "sl_headquarters",
  "isWorker": true,
  "department": "Choir"
}
```

---

## Response Format

### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Registration submitted successfully!",
  "data": {
    "id": "unique_member_id",
    "type": "new" | "old",
    "timestamp": "2026-02-15T06:48:00.000Z"
  }
}
```

### Error Response (400/500)
```json
{
  "success": false,
  "message": "Failed to submit registration. Please try again.",
  "error": "detailed_error_message"
}
```

---

## Validation Rules Summary

### Common Fields (Both Forms)
- **fullName**: Required, min 2 characters
- **gender**: Required, must be "male" or "female"
- **address**: Required, min 5 characters
- **phoneNumber**: Required, must match phone regex pattern

### New Member Specific
- **invitedBy**: Required, min 2 characters

### Old Member Specific
- **parish**: Required, must be one of the three enum values
- **isWorker**: Required, boolean
- **department**: Required only if isWorker is true

---

## Base URL
`https://todos-a-pee-hi.onrender.com`

## Full Endpoints
- New Member: `https://todos-a-pee-hi.onrender.com/api/v1/rccgsl/register-member/new`
- Old Member: `https://todos-a-pee-hi.onrender.com/api/v1/rccgsl/register-member/old`
