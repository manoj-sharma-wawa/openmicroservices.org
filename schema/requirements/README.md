# System Requirements <Badge text="FUTURE" type="error" tip="middle"/>

Define containers system requirements.

```yaml
system:
  soft:
    cpu: 0.5
    memory: 32MB
  hard:
    cpu: 1
    memory: 64MB
```

<json-table>
<p>
{
    "soft": {
        "desc": "Soft limits for your service",
        "$block": {
            "cpu": "The percentage of the CPU to be utilised. If unspecified, this defaults to 0.5, which means use 50% the CPU available",
            "memory": "The memory that reserved for this service. If unspecified, this defaults to 32MB"
        }
    },
    "hard": {
        "desc": "Hard limits for your service",
        "$block": {
            "cpu": "The percentage of the CPU to be utilised. If unspecified, this defaults to 1, which means use all the CPU available",
            "memory": "The memory that reserved for this service. The service is killed if it tries to allocate more memory. If unspecified, this defaults to 64MB"
        }
    }  
}
</p>
</json-table>
