# Scaling

Define scaling schedules.

```yaml
scale:
  metric_type: cpu  # cpu or mem
  metric_agg: avg
  value: 80
  min: 1
  max: 5
  desired: 5
  cooldown: 60 # number of seconds to wait before additional scaling activities begin
```

Some services need to scale dynamically by calling a command before processing.
