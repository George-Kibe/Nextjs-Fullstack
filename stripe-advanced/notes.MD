## Running Convex Terminal 
```bunx convex dev```

## Seeding a database table with test data
```bunx convex import --table courses courseData.json```

## Stripe Webhooks configuration
1. Stripe login. ```stripe login```
2. Forward events to your webhook. ```stripe listen --forward-to localhost:3000/api/webhooks/stripe```