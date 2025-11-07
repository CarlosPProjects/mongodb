# MongoDB Queries - Top 50 Players

Consultas progresivas usando `aggregate()`, donde cada query agrega un campo adicional.

## Query N.3

```javascript
const aggregation = await collection
  .aggregate([
    {
      $project: {
        _id: 0,
        name: 1,
        partner: 1,
        "ranking.current": 1,
        "career.totals.win_rate": 1,
      },
    },
    {
      $sort: {
        "career.totals.win_rate": -1,
      },
    },
    {
      $limit: 10,
    },
  ])
  .toArray();
```

**Campos:** `name`, `partner`, `ranking.current`, `career.totals.win_rate`

---

## Query N.4

```javascript
const aggregation = await collection
  .aggregate([
    {
      $group: {
        _id: "$bio.residence",
        avg: { $avg: "$career.totals.win_rate" },
        count: { $sum: 1 },
      },
    },
    {
      $match: {
        count: { $gt: 1 },
      },
    },
  ])
  .toArray();
```

**Campos:** `avg`, `count`

## Ejecutar

```bash
bun run dev
```
