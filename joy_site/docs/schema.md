# Schema
---

## Subscribers
---

| Column Name | Data Type | Details |
| ------------- | ------------- | ------------- |
| id | integer | not null, primary key |
| name | string | not null |
| email | string | not null, unique |

## Music
---

| Column Name | Data Type | Details |
| ------------- | ------------ | ------------- |
| id | integer | not null, primary key |
| title | string | not null |
| rdate | string | |
| duration | string | not null |

## Locations
---

| Column Name | Data Type | Details |
| ------------- | ------------ | ------------- |
| id | integer | not null, primary key |
| name | string | not null |

## Gallery
---

| Column Name | Data Type | Details |
| ------------- | ------------ | ------------- |
| id | integer | not null, primary key |
| loc_id | string | |

## Contact
---

| Column Name | Data Type | Details |
| ------------- | ------------ | ------------- |
| id | integer | not null, primary key |
| name | string | not null |
| email | string | not null |
